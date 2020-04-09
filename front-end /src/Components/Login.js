import React, { Component } from 'react'

export class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }


    changeHandler = (event) => {
        this.setState({
            email: event.target.value,
            password: event.target.value
        })
    }

    render() {
        return (
            <div className='login-screen'>
                <div className='login-title'>
                    <h1>Login</h1>
                </div>
                <form>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter email'
                        value={this.state.email}
                        onChange={this.changeHandler}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Type in Password'
                        value={this.state.password}
                        onChange={this.changeHandler}
                    />
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login
