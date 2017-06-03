
let prefix = function (num) {
    if (num < 10) {
        return '0' + num;
    }
    return '' + num;
}

export default function (time) {

    if (typeof time !== 'number') {
        throw Error('Time formatter only accepts an integer of time in seconds.');
    }

    if (time < 60) {
        return '0:' + prefix(time);
    } else if (time < 60 * 60) {
        let minutes = Math.floor(time / 60);
        let seconds = time - (minutes * 60);

        return minutes + ':' + prefix(seconds);
    } else {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - (hours * 3600)) / 60);
        let seconds = time - (hours * 3600) - (minutes * 60);

        return hours + ':' + prefix(minutes) + prefix(seconds);
    }

};