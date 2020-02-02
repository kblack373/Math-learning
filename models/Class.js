const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'class',
    {
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
    },
    {
        timestamps: false
    }
)