'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Alimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tipo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      porcao: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      un_porcao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      carboidratos: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      un_carboidratos: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      proteinas: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      un_proteinas: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Alimentos');
  }
};