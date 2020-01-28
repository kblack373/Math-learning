import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
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
             {localStorage.usertoken ? userLink : loginRegLink}
            </div>
        </nav>

    
    )
    }
}

export default withRouter(Navbar)