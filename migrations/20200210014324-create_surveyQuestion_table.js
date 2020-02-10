'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("survey_question", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      surveyqid: {
          type: Sequelize.INTEGER,
          primaryKey: true
      },
      surveyquestion: {
          type:Sequelize.STRING
      },
      range: {
          type: Sequelize.FLOAT,
          defaultValue: 5.0
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("survey_question");
  }
};
