class Profesor extends Model {}

// DEFINO EL MODELO PROFESOR
Profesor.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    odelName: 'profesor'
});

module.exports = Profesor;