const technology = require('../data/technology.json');
const techTop = require('../data/techTop.json');

const TechData = (req, res) => {
    const data = {
        technology: technology,
        techTop: techTop
    }
    res.send(data);
}

module.exports = {TechData};