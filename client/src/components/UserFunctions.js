import axios from 'axios'

export const register = newUser => {
    return axios
    .post('users/register',{
        first_name:newUser.first_name,
        last_name: newUser.last_name,
        student_id:newUser.student_id,
        password:newUser.password,
        dev_pass:newUser.dev_pass
    })
    .then(res =>{
        console.log("Registered")
    })
}

// export const registerTeacher = newTeacher => {
//     return axios
//     .post('users/register',{
//         first_name:newTeacher.first_name,
//         last_name: newTeacher.last_name,
//         student_id:newTeacher.student_id,
//         password:newTeacher.password,
//         dev_pass:newTeacher.dev_pass
//     })
//     .then(res =>{
//         console.log("Registered Teacher")
//     })
// }
export const login = user =>{
    return axios
        .post('users/login',{
            student_id:user.student_id,
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

export const questions = answers =>{
    return axios
        .post('users/questions',{
            question_one:answers.question_one
        })
}