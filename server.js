//This dependency is responsible for turning the server on
let http = require('http');

let app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function () {

    console.log("Server sendo executado na porta " + app.get('port'));

});

