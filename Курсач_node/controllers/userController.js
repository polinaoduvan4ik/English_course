const User = require('../models').user;

exports.registerUser = async function (request, response) {
    let user = request.body;
    if(user.name!==undefined&&user.name!==null&&user.name!==''&&
    user.phone!==undefined&&user.phone!==null&&user.phone!==''&&
    user.level!==undefined&&user.level!==null&&user.level!==''){
        let res = await User.create({name:user.name,phone:user.phone,levelId:user.level})
        response.send(res);
    }
    response.status(406).send('ERROR with data');
};

