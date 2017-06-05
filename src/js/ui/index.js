let express = require('express');
let app = express();
let http = require('http').Server(app);
let path = require('path');
let io = require('socket.io')(http);

app.use('/', express.static(path.join(__dirname, 'assets')));

http.listen(3000, () => {
    console.log('Server started listening');
});

io.on('connection', (socket) => {
    console.log('A client started listening');

    socket.on('broadcast', (data) => {
        socket.broadcast.emit(data.eventName, data.payload);
    });

    socket.on('disconnect', () => {
        console.log('A client stopped listening');
    });
});
