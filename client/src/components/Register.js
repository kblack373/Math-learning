import React, { Component } from 'react'
import { register } from './UserFunctions'
import password from "../config"
import ModalExample from "./Modals"
// import { toggle } from "./Modals"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            student_id: '',
            password: '',
            checked: false,
            dev_pass: '',
            agreed: false,
            modal: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleCheckboxChange = event => {
        this.setState({ checked: !this.state.checked })
        this.setState({ dev_pass: '' })
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }
    studentAgreement() {
        this.setState({
            agreed: true
        })
        this.toggle()
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
            if (this.state.dev_pass === password.teacher_code) {
                //create register_teacher function in UserFunctions
                register(teacher).then(res => {
                    // alert(teacher.first_name + " " + teacher.last_name + " Teacher!")
                    this.props.history.push('/login')
                })
            }
            // TODO: make a pop up for this.
            else {
                this.setState({ dev_pass: '' })
            }
        }
        else {
            const user = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                student_id: this.state.student_id,
                password: this.state.password,
                dev_pass: this.state.dev_pass,
                agreed:this.state.agreed
            }
            alert(user.agreed)
            // register(user).then(res => {
            // alert(user.first_name + " " + user.last_name + " Registered!")
            // this.props.history.push('/login')
            // })
        }
    }

    render() {
        const teacher_code = (
            <div>
                <label>Teacher Code</label>
                <input type="password"
                    name="dev_pass"
                    placeholder="Teacher Code"
                    value={this.state.dev_pass}
                    onChange={this.onChange}
                />
                <ModalExample buttonLabel="test" className="test" />
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
                    <button label="test" onClick={this.toggle} type="submit">Register</button>
                    <div>
                        <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader>STUDENT CONSENT FORM FOR
                                PARTICIPATION IN HUMAN RESEARCH AT
                                MONTANA STATE UNIVERSITY
                            </ModalHeader>
                            <ModalBody>
                                You are being asked to participate in a research study about undergraduate students’ engagement while
    studying mathematics. This may help us to better understand student engagement during mathematics
    class. Participation in this research is voluntary and participation or non-participation will not affect
    your grades in any way. If you agree to participate in this study, you will be asked to create a free user
    account on a web-based application on your device(s) – phone, tablet, computer, etc. – which will allow
    us to issue you a questionnaire twice during each of your regular class meetings. Each class meeting will
    be videotaped. There are no foreseen risks to you as a participant; however, questionnaires may be
    inconvenient at first. To minimize this inconvenience, the questionnaire is short and you may elect to
    dismiss or ignore it any time it is sent. You may participate in the study as long as you are enrolled in the
    course. You may elect to stop participating at any time. Data collected from you and your classmates will
    be used to engineer more engaging mathematics lessons based on your experiences. Potential benefits
    to you include a more engaging learning environment, which may promote learning and understanding.
    The researchers will not identify you by name in any reports using information obtained from video data
    and questionnaires. Subsequent uses of records and data will be subject to standard data use policies
    which protect the anonymity of individuals and institutions. Should you have questions about the
    research you may contact Derek Williams, derek.williams2@montana.edu. If you have additional
    questions about the rights of human subjects you can contact the Chair of the Institutional Review
    Board, Mark Quinn, (406) 994-4707 [mquinn@montana.edu].

    AUTHORIZATION: I have read the above and understand the discomforts, inconvenience and risk of this
    study. I, _____________________________ (printed name of subject), agree to participate in this
    research. I understand that I may later refuse to participate, and that I may withdraw from the study at
    any time. I have received a copy of this consent form for my own records.
    AUTHORIZATION FOR VIDEOTAPING: I (name of subject),
agree to be videotaped during instructional sessions.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.studentAgreement}>I agree to participate in the study!</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>No. I do not want to participate</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </form>
            </div>

        )
    }
}

export default Register