const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'is_enrolled_in',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        classid: {
            type: Sequelize.INTEGER,
            primaryKey: true
        }
    },
    {
        timestamps: false
    }
)