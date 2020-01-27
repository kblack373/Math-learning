import React, {Component} from 'react'
import {register} from './UserFunctions'

class Register extends Component{
    constructor() {
        super()
        this.state = {
            first_name:'',
            last_name:'',
            student_id:'',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            student_id:this.state.student_id,
            password:this.state.password
        }

        register(user).then(res =>{
            if(res) {
                this.props.history.push('/login')
            }
        })
    }

    render(){
        return(
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <h1>Sign in!</h1>
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
                        <label>Student Id</label>
                        <input type="text"
                        name="student_id"
                        placeholder="Student ID"
                        value={this.state.student_id}
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
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register