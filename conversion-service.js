const cote = require('cote');

const responder = new cote.Responder({ name: 'currency conversion responder'});
const subscriber = new cote.Subscriber({ name: 'arbitration subscriber'});

const rates = {
    usdEur: 0.91,
    eurUsd: 1.10
};
const capitalize = function(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1));
}
responder.on('convert', (req, cb) => {
    const {
        amount,
        from,
        to
    } = req;
    cb(amount * rates[`${from}${capitalize(to)}`]);
});
subscriber.on('update rate', (update) => {
    rates[update.curensies] = update.rate;
});
