import React, {Component} from 'react'
import {login} from './UserFunctions'

class Login extends Component{
    constructor() {
        super()
        this.state = {
            student_id:'',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            student_id:this.state.student_id,
            password:this.state.password
        }

        login(user).then(res =>{
            if(res) {
                this.props.history.push('/profile')
            }
        })
    }

    render(){
        return(
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <h1>Sign in!</h1>
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
                    <button type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

export default Login