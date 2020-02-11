import React, { Component, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { Collapse, Navbar as Navbar1, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
            setCollapsed: true
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
        // const toggleNavbar = () => setCollapsed(!collapsed);
    }
    toggleNavbar() {
        this.setState({ collapsed: !this.state.collapsed })
    }
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
        <div>
            <NavItem>
                <NavLink href="/login">
                    Login
                 </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/register">
                    Register
                 </NavLink>
            </NavItem>
            </div>
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

        return (
            <div>
                <Navbar1 color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            {localStorage.usertoken ?
                                jwt_decode(localStorage.usertoken).admin_level === 1 ? userLink :
                                    jwt_decode(localStorage.usertoken).admin_level === 2 ? teacherLink :
                                        derekLink :
                                loginRegLink}
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar1>
            </div>
            // <nav>
            //     {/* below div is where collapse and such goes 
            //  above is where the toggle, target and span go.
            //  */}
            //     <div id="navbar1">
            //         <ul>
            //             <li>
            //                 <Link to="/">
            //                     Home
            //          </Link>
            //             </li>
            //         </ul>
            //         {/* make a more elegant solution here? */}

            //     </div>
            // </nav>


        )
    }
}

export default withRouter(Navbar)