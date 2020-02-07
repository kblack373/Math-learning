const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'survey',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        student_id: {
            type: Sequelize.INTEGER
        },
        question_one: {
            type: Sequelize.STRING
        },
        question_two: {
            type: Sequelize.STRING
        },
        question_three: {
            type: Sequelize.STRING
        },
        question_four: {
            type: Sequelize.STRING
        },
        question_five: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)