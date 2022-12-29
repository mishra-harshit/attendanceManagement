module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("users",{
        
            id:{
                type: DataTypes.INTEGER(11).UNSIGNED,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            secret: {
                type: DataTypes.STRING,
                allowNull: false
            },
            manager_id: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                allowNull: false
            },
            roles: {
                type: DataTypes.ENUM('admin', 'user'),
                allowNull: false
            }


        }
    )

    return Users
}