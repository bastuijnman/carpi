let dbus = require('dbus');
let bus = dbus.getBus('system');

bus.getInterface('org.bluez', '/org/bluez/hci0/dev_6C_72_E7_08_7A_FE/player0', 'org.bluez.MediaPlayer1', (err, interface) => {
    if (err) {
        console.log('MAJOR ERROR', err);
        return;
    }

    setInterval(function () {
        interface.getProperty('Track', function (err, track) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(track);
        });
    }, 5000);
});
