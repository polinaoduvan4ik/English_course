const Question = require('../models').question;


exports.getQuestions = async function (request, response) {
    let id = request.body.id;
    if(id!==undefined&&id!==null&&id!==''){
        let res = await Question.findAll({where:{testId:id}})
        response.send(res);
    }
    response.status(406).send('ERROR with data');
};


