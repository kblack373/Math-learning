import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import jwt_decode from 'jwt-decode'

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    checkAdmin(token){
        const admin_level = jwt_decode(token).admin_level
        if( admin_level === "derek" ){
           return <span><derekLink /></span>
        }
        else if( admin_level === "teacher" ){
            return <teacherLink />
        }
        else{
            return <userLink />
        }
    }
    

    render() {
     const loginRegLink = (
         <ul>
             <li>
                 <Link to="/login">
                     Login
                 </Link>
             </li>
             <li>
                 <Link to="/register">
                     Register
                 </Link>
             </li>
         </ul>
     )  
     const userLink = (
        <ul>
            <li>
                <Link to="/profile">
                    User
                </Link>
            </li>
            <li>
                <a href="/" onClick={this.logOut.bind(this)}>
                    Logout
                </a>
            </li>
        </ul>
    )
    const derekLink = (
        <ul>
            <li>
                <Link to="/profile">
                    User
                </Link>
            </li>
            <li>
                <Link to="/dataTables">
                    Data Tables
                </Link>
            </li>
            <li>
                <Link to="/addClass">
                    Add Class
                </Link>
            </li>
            <li>
                <Link to="/addTeacher">
                    Add Teacher
                </Link>
            </li>
            <li>
                <a href="/" onClick={this.logOut.bind(this)}>
                    Logout
                </a>
            </li>
        </ul>
    )
    const teacherLink = (
        <ul>
            <li>
                <Link to="/profile">
                    User
                </Link>
            </li>
            <li>
                <Link to="/addClass">
                    Add Class
                </Link>
            </li>
            <li>
                <a href="/" onClick={this.logOut.bind(this)}>
                    Logout
                </a>
            </li>
        </ul>
    )

    return(    
        <nav>
             {/* below div is where collapse and such goes 
             above is where the toggle, target and span go.
             */}
            <div id="navbar1">
             <ul>
                 <li>
                     <Link to="/">
                         Home
                     </Link>
                 </li>
             </ul>
             {/* make a case where it could be dev or derek here */}
             {/* {localStorage.usertoken.admin_level == "derek" ? derekLink :
             localStorage.usertoken.admin_level == "teacher" ? teacherLink : 
             localStorage.usertoken ? userLink : loginRegLink} */}
             {localStorage.usertoken ? userLink : loginRegLink}
            </div>
        </nav>

    
    )
    }
}

export default withRouter(Navbar)