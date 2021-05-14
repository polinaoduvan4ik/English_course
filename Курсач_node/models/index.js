const Sequelize = require('sequelize');


const sequelize = new Sequelize("English_course", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const Level = require('./level')(Sequelize,sequelize);
const Question = require('./question')(Sequelize,sequelize);
const Reply = require('./reply')(Sequelize,sequelize);
const Test = require('./test')(Sequelize,sequelize);
const User = require('./user')(Sequelize,sequelize);

Level.hasMany(User);
User.belongsTo(Level);

Question.hasMany(Reply);
Reply.belongsTo(Question);

Test.hasMany(Question);
Question.belongsTo(Test);


sequelize.sync({force: false}).then(result=>{
})
.catch(err=> console.log(err));

module.exports={
    level:Level,
    question:Question,
    reply:Reply,
    test:Test,
    user:User,
}