const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const Account = require("../models/Account")

process.env.SECRET_KEY = 'secret'

users.post('/register' , (req, res) =>{
    const today = new Date()
    
    const userData = {
        fName: req.body.fName,
        lName: req.body.lName,
        username:req.body.username,
        passwordHash:req.body.passwordHash,
        createdTimestamp:req.body.createdTimestamp,
        consentBool:req.body.consentBool
    }

    //userData.username = userData.fname + "." + userData.lName
    userDup = 0, userPosted = false

    while(!userPosted){
        //console.log(userData.username)
        Account.findOne({
            where: {
                username: userData.username
            }
        })
        .then(user =>{
            console.log(user)
            if(!user){
                bcrypt.hash(userData.passwordHash, 10, (err,hash) => {
                    userData.passwordHash = hash
                    Account.create(userData)
                    .then(user => {
                        res.json({status: user.username + ' created'})
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
                })
                userPosted = true
                alert("User " + userData.username + " created!")
            }else{
                //res.json({error: "User already exists"})
                
                userDup++
                userData.username = userData.fname + "." + userData.lName + userDup
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    }
})

users.post('/login', (req,res) => {
    Account.findOne({
        where: {
            username:req.body.username
        }
    })
    .then(user =>{
        if(user) {
            if(bcrypt.compareSync(req.body.passwordHash,user.passwordHash)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
        } else{
            res.status(400).json({error:"Account does not exist. :("})
        }
    })
    .catch(err =>{
        res.status(400).json({error: err})
    })
})
module.exports = users