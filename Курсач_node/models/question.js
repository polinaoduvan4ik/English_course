module.exports=(Sequelize, sequelize)=>{
    return sequelize.define('questions',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        question:{
            type: Sequelize.STRING,
        },
       
      },
      {sequelize, modelName:'question', tableName:'questions', timestamps:false,
     })
}