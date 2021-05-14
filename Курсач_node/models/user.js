module.exports=(Sequelize, sequelize)=>{
    return sequelize.define('users',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        phone:{
            type: Sequelize.STRING,
            unique: false,
            allowNull: false
        },
        
      },
      {sequelize, modelName:'user', tableName:'users', timestamps:false,
     })
}