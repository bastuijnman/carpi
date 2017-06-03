let express = require('express');
let app = express();
let http = require('http').Server(app);
let path = require('path');

// app.get('/', (request, response) => {
//     response.send('<h1>CarPI UI</h1>');
// });
app.use('/', express.static(path.join(__dirname, 'assets')));

http.listen(3000, function () {
    console.log('Server started listening');
});
