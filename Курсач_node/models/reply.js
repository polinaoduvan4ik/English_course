module.exports=(Sequelize, sequelize)=>{
    return sequelize.define('replies',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reply:{
            type: Sequelize.STRING,
            allowNull: false
        },
        accuracy:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        }, 

      },
      {sequelize, modelName:'reply', tableName:'replies', timestamps:false,
     })
}