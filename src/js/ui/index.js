let express = require('express');
let app = express();
let http = require('http').Server(app);
let path = require('path');
let io = require('socket.io')(http);

app.use('/', express.static(path.join(__dirname, 'assets')));

http.listen(3000, () => {
    console.log('Server started listening');
});

io.on('connection', () => {
    console.log('A client started listening');
});