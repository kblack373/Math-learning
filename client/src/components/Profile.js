import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'


class Profile extends Component{
    constructor(){
        super()
        this.state = {
            first_name:'',
            last_name: '',
            student_id:''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            student_id: decoded.student_id
        })
        }
        render(){
            return(
                <div>
                    <h1>Profile</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Student ID</td>
                                <td>{this.state.student_id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
}

export default Profile



