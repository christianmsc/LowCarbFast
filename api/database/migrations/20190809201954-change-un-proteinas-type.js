'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Alimentos', 'un_proteinas', { type: Sequelize.STRING });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Alimentos', 'un_proteinas', { type: Sequelize.INTEGER });
  }
};
