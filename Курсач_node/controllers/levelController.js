const Level = require('../models').level;

exports.getLevels = async function (request, response) {
    let res = await Level.findAll()
    response.send(res);
};


