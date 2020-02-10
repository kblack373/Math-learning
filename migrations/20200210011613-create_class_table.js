'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("class", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      classCode: {
          type: Sequelize.STRING,
          primaryKey: true
      },
      className: {
          type:Sequelize.STRING
      },
      startTime: {
          type:Sequelize.TIME
      },
      endTime: {
          type:Sequelize.TIME
      },
      uid: {
          type:Sequelize.INTEGER
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("class");
  }
};
