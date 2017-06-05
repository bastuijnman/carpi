let dbus = require('dbus');
let bus = dbus.getBus('system');
let udev = require('udev');
let exec = require('child_process').exec;
let monitor = udev.monitor();

let currentlyPlayingTrack = {};

let getUniqueTrackId = function (track) {
    return track.Title + '_' + track.Artist + '_' + track.Album;
};

let getMacAddress = function () {
    return new Promise(function (fulfill, reject) {
        exec('hcitool con | grep SLAVE | grep -o -E "([[:xdigit:]]{1,2}:){5}[[:xdigit:]]{1,2}"', function (err, stdout, stderr) {
            if (err) {
                reject(err);
                return;
            }
            fulfill(stdout.replace('\n', ''));
        });
    });
};

let getBusInterface = function (macAddress) {
    return new Promise(function (fulfill, reject) {
        bus.getInterface('org.bluez', '/org/bluez/hci0/dev_' + macAddress.replace(/\:/g, '_') + '/player0', 'org.bluez.MediaPlayer1', (err, interface) => {
            if (err) {
                reject(err);
                return;
            }
            fulfill(interface);
        });
    });
};

let setSocketListeners = function (interface) {

    let socket = require('socket.io-client')('http://localhost:3000');

    setInterval(() => {

        interface.getProperties((err, data) => {

            if (err) {

                /*
                 * For now we don't do anything with interface errors yet. If an error
                 * occurs it's probably just not ready for getting the properties and it
                 * will run a next time.
                 */
                return;
            }

            if (data.Track.Title && getUniqueTrackId(currentlyPlayingTrack) !== getUniqueTrackId(data.Track)) {
                currentlyPlayingTrack = data.Track;
            }

            let payload = {
                track: currentlyPlayingTrack,
                status: data.Status,
                position: data.Position
            };

            socket.emit('broadcast', {
                eventName: 'mediaPlayerUpdate',
                payload: payload
            });
        });

    }, 500);

    socket.on('mediaEvent', (payload) => {
        switch (payload.type) {
            case 'playPause':
                if (payload.status === 'playing') {
                    interface.Pause();
                } else {
                    interface.Play();
                }
                break;
            case 'goToNext':
                interface.Next();
                break;
            case 'goToPrevious':
                interface.Previous();
                break;
        }
    });

};

let useDeviceForControls = function () {
    getMacAddress()
        .then(getBusInterface)
        .then(setSocketListeners)
        .catch((err) => {
            console.log('Error while setting the device for control use', err);
        });
}

monitor.on('add', function (device) {
    if (device.SUBSYSTEM === 'bluetooth') {

        /*
         * For some reason hcitool does not receive the device as fast as udev does, for this reason
         * we currently use a timeout to ensure we can retrieve the MAC address. This is totally wonky
         * and error prone and should be fixed.
         *
         * TODO: find a better solution for checking the MAC address
         */
        setTimeout(useDeviceForControls, 3000);
    }
});
