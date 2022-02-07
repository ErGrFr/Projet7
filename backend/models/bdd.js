module.exports =(sequelize, DataTypes) =>{
    const TableUsers = sequelize.define("users",{
        text:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return TableUsers;
};