/*
* Asks for the curency conversion operation
*/
const cote = require('cote');

const requester = new cote.Requester({ name: 'currency conversion requester'});

const request = {
    type: 'convert',
    from: 'usd',
    to: 'eur',
    amount: 100
};
requester.send(request, (res) => {
    console.log(res);
});
