const express = require("express")
const users = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
// import {devPass} from "../config"
// const devPass = require("../config")
const User = require("../models/User")
const Survey = require("../models/Survey")
process.env.SECRET_KEY = 'secret'

users.post('/register' , (req, res) =>{
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        student_id:req.body.student_id,
        password:req.body.password,
        admin_level:req.body.admin_level,
        created:req.body.created

    }
    if(req.body.dev_pass === "12345"){
        userData.admin_level = 3
    }
    //fix this. need to make a cleaner solution for breaking.
    else if(req.body.dev_pass!=''){
        return
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
                    res.json({status: user.student_id + ' created'})
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

users.post('/questions/survey', (req,res) =>{
    const answers = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        student_id:req.body.student_id,
        question_one:req.body.question_one,
        question_two:req.body.question_two,
        question_three:req.body.question_three,
        question_four:req.body.question_four,
        question_five:req.body.question_five
    }
        Survey.create(answers)
        res.send("here")
    })
module.exports = users