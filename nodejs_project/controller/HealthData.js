const health = require('../data/health.json');
const healthTop = require('../data/healthTop.json');

const HealthData = (req, res) => {
    const data = {
        health : health,
        healthTop : healthTop
    }
    res.send(data);
}

module.exports = {HealthData};