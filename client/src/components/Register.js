import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            student_id: '',
            password: '',
            checked: false,
            dev_pass: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleCheckboxChange = event => {
        this.setState({ checked: !this.state.checked })
    }

    onSubmit(e) {
        e.preventDefault()

        if (this.state.checked) {
            const teacher = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                student_id: this.state.student_id,
                password: this.state.password,
                dev_pass: this.state.dev_pass
            }
            //create register_teacher function in UserFunctions
            register(teacher).then(res => {
                alert(teacher.first_name + " " + teacher.last_name + " Teacher!")
                this.props.history.push('/login')
            })
        }
        else{
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            student_id: this.state.student_id,
            password: this.state.password
        }

        register(user).then(res => {
            alert(user.first_name + " " + user.last_name + " Registered!")
            this.props.history.push('/login')
        })
    }
    }

    render() {
        const teacher_code = (
        <div>
            <label>Teacher Code</label>
            <input type="text"
                name="dev_pass"
                placeholder="Teacher Code"
                value={this.state.dev_pass}
                onChange={this.onChange}
            />
        </div>
        )
        return (
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
                    <div>
                        <label>Teacher?</label>
                        <input
                            type="checkbox"
                            name="teacherCheckbox"
                            defaultChecked={this.state.checked}
                            onChange={this.handleCheckboxChange} />
                    </div>
                    {this.state.checked ? teacher_code : false}
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default Register