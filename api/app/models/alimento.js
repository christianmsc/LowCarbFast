module.exports = (sequelize, DataTypes) => {
    const Alimento = sequelize.define('Alimento', {
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        porcao: DataTypes.INTEGER,
        un_porcao: DataTypes.STRING,
        carboidratos: DataTypes.INTEGER,
        un_carboidratos: DataTypes.STRING,
        proteinas: DataTypes.INTEGER,
        un_proteinas: DataTypes.STRING
    });
  
    return Alimento;
}