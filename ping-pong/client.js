var cote = require('cote');

var client = new cote.Requester({
    name: 'client'
});

function sendRequest(){
    console.log('sending ping...');
    client.send({
        type: 'ping'
    }, function(res) {
        console.log('reseived', res);
    });
};

setInterval(sendRequest, 2000);
