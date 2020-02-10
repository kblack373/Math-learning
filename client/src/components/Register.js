import React, {Component} from 'react'
import {register} from './UserFunctions'

//Register page
class Register extends Component{
    constructor() {
        super()

        //Creates user object
        this.state = {
            first_name:'',
            last_name:'',
            password:'',
            password_c: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()

        if(this.state.password == this.state.password_c){
            const user = {
                first_name:this.state.first_name,
                last_name:this.state.last_name,
                student_id:this.state.first_name.toLowerCase() + "." + this.state.last_name.toLowerCase(),
                password:this.state.password
            }

            //alert(user.first_name + " " + user.last_name + " (Username: " + user.student_id + ") Registered!")

            register(user).then(res =>{
                    {alert(user.first_name + " " + user.last_name + " (Username: " + user.student_id + ") Registered!")}
                    this.props.history.push('/login')
            })
        }
        else{
            alert("Passwords didn't match!")
        }
    }

    render(){
        return(
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <h1>Sign Up!</h1>
                    <div>
                        <label>First name</label> 
                        <input type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input type="text"
                        name="last_name"
                        placeholder="Enter Last name"
                        value={this.state.last_name}
                        onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password"
                        name="password_c"
                        placeholder="Confirm Password"
                        value={this.state.password_c}
                        onChange={this.onChange}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register