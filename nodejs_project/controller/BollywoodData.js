const bollywood = require('../data/bollywood.json');
const bollyTop = require('../data/bollyTop.json');

const BollyData = (req,res) => {
    const data = {
        bollywood : bollywood,
        bollyTop : bollyTop
    }
    res.send(data);
}

module.exports = {BollyData};