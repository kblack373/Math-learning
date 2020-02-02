const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'survey_response',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        timestamp: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        classid: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        surveyqid: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        surveyanswer: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)