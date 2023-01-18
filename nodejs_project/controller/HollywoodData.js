const hollywood = require('../data/hollywood.json');
const hollyTop = require('../data/hollyTop.json');

const HollyData = (req, res) => {
    const data = {
        hollywood: hollywood,
        hollyTop: hollyTop
    }
    res.send(data);
}

module.exports = {HollyData};