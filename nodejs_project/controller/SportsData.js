const sports = require('../data/sports.json');
const sportsTop = require('../data/sportsTop.json');

const SpData = (req, res) => {
    const data = {
        sports: sports,
        sportsTop: sportsTop
    }
    res.send(data);
}

module.exports = {SpData};