const { isObject } = require('util');

let app = require('express')();
let http = require('http').createServer(app);

app.get('/', (req, res) => {
    // here we are going to send something else
    res.send('<h1>Hello Work</h1>');
});


// this is the server listener
io.on('connection', (socket) => {
    console.log("a user is connected");
});


http.listen(3001, () => {
    console.log('listening on 3001')
})