const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")

process.env.SECRET_KEY = 'secret'

users.post('/register' , (req, res) =>{
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        student_id:req.body.student_id,
        password:req.body.password,
        created:req.body.created

    }
    User.findOne({
        where: {
            student_id: req.body.student_id
        }
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password, 10, (err,hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.student_id + 'created'})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        }else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

users.post('/login', (req,res) => {
    User.findOne({
        where: {
            student_id:req.body.student_id
        }
    })
    .then(user =>{
        if(user) {
            if(bcrypt.compareSync(req.body.password,user.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
        } else{
            res.status(400).json({error:"account does not exist. :("})
        }
    })
    .catch(err =>{
        res.status(400).json({error: err})
    })
})
module.exports = users