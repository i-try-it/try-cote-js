var cote = require('cote');

var service = new cote.Responder({
    name: 'service'
});

service.on('ping', function(req, cb) {
    console.log('reseive ping. replying with pong');
    cb('pong!');
})
