let app = require('express')();
let http = require('http').Server(app);

app.get('/', (request, response) => {
    response.send('<h1>CarPI UI</h1>');
});

http.listen(3000, function () {
    console.log('Server started listening');
});
