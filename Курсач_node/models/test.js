module.exports=(Sequelize, sequelize)=>{
    return sequelize.define('tests',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        test_name:{
            type: Sequelize.STRING,
            allowNull: false
        }
      },
      {sequelize, modelName:'test', tableName:'tests', timestamps:false,
     })
}