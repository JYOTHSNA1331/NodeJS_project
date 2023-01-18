const home = require('../data/home.json');
const homeTop = require('../data/homeTop.json');
const homeLatest = require('../data/homeLatest.json');
const homeStories = require('../data/homeStories.json');

const HomeData = (req, res) => {
    const data = {
        home : home,
        homeTop : homeTop,
        homeLatest: homeLatest,
        homeStories: homeStories
    }
    res.send(data);
}

module.exports = {HomeData};