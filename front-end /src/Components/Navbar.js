import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Modal from './Modal';
import Login from './Login';
import SignUp from './SignUp';

export class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            modal: false,
            modalContent: <Modal />
        }
    }

    showModal = () => {
        this.setState({ modal: true })
    }

    changeModalContent = (newContent) => {
        let modalContent = <Modal changeModalContent={this.changeModalContent} />
        return newContent = 'login' ?
            <Login changeModalContent={this.changeModalContent} closeModal={this.closeModal} />
            : newContent = 'signup' ?
                <SignUp changeModalContent={this.changeModalContent} closeModal={this.closeModal} />
                : this.setState({ modalContent })
    }

    signUp = (e) => {
        document.querySelector('body').classList = 'body-modal-show';
        this.setState({ showModal: true })
        this.changeModalContent('signup');
    }

    login = (e) => {
        document.querySelector('body').classList = 'body-modal-show';
        this.setState({ showModal: true })
        this.changeModalContent('login');
    }

    render() {

        return (
            <div className='navbar-config'>
                <Link to='/'>Home</Link>
                <Link to='/Login'>Login</Link>
                <Link to='/SignUp'>Sign-Up</Link>
                <Link to='/Profile'>Profile</Link>
            </div>
        )
    }
}

export default Navbar
