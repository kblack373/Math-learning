const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'account',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fName: {
            type: Sequelize.STRING
        },
        lName: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.INTEGER,
        },
        passwordHash: {
            type: Sequelize.STRING
        },
        createdTimestamp: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        consentBool: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    },
    {
        timestamps: false
    }
)