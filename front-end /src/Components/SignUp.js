import React, { Component } from 'react'

export class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
        }
    }

    changeEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    changeFirst = (e) => {
        this.setState({ firstName: e.target.value })
    }
    changeLast = (e) => {
        this.setState({ lastName: e.target.value })
    }
    changeNumber = (e) => {
        this.setState({ phoneNumber: e.target.value })
    }
    changePass = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div className="register-form">
                <p className='form-msg red-text'>{this.state.msg}</p>
                <form onSubmit={this.submitSignup}>
                    <input onChange={this.changeEmail} className="email-signup" placeholder="Email address" required type='email' />
                    <input onChange={this.changeFirst} className="first-signup" placeholder="First name" required />
                    <input onChange={this.changeLast} className="last-signup" placeholder="Last name" required />
                    <input onChange={this.changeNumber} placeholder='Phone Number' required />
                    <input onChange={this.changePass} className="password-signup" type='password' placeholder="Password" required />
                    <button type='submit' value='Submit'>Sign up</button>
                    <div className="border-rule"></div>
                    <div className="login-text align-left">Already have an account? <span onClick={() => { this.props.changeModalContent('login') }}>Log In</span></div>
                </form>
            </div>
        )
    }
}

export default SignUp
