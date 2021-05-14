module.exports=(Sequelize, sequelize)=>{
    return sequelize.define('levels',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        level_name:{
            type: Sequelize.STRING,
        },
        level_description:{
            type:Sequelize.STRING
        }
      },
      {sequelize, modelName:'level', tableName:'levels', timestamps:false,
     })
}