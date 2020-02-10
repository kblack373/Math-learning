import axios from 'axios'

export const register = newUser => {
    //console.log(newUser)
    return axios
    .post('users/register',{
        fName: newUser.first_name,
        lName: newUser.last_name,
        username: newUser.student_id,
        passwordHash: newUser.password,
        createdTimestamp: new Date(),
        consentBool: false
    })
    .then(res =>{
        console.log("Registered")
    })
    .catch(err =>{
        console.log("FUCK: " + err)
    })
}

export const login = user =>{
    return axios
        .post('users/login',{
            username:user.username,
            password:user.password
        })
        .then(res =>{
            localStorage.setItem("usertoken",res.data)
            return res.data
        })
        .catch(err =>{
            console.log(err)
        })
}