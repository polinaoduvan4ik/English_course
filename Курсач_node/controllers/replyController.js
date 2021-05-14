const Reply = require('../models').reply;

exports.getReplies = async function (request, response) {
    let id = request.body.id;
    let res;
    if(id!==undefined&&id!==null&&id!==''){
         res = await Reply.findAll({where:{questionId:id},attributes: ['id', 'reply','questionId']});
        response.send(res);
    }
    response.status(406).send('ERROR with data');
};
