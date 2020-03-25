import React from 'react';


function Modal(props) {

    return (
        <div className='body-modal-show'>
            <button className="facebook-login">Connect With Facebook</button>
            <button className="google-login">Connect with Google</button>
            <span>or</span>
            <button >Sign up with email</button>
            <div className="border-rule"></div>
            <div>Already have an account? <button>Log In</button></div>
        </div>
    )
}

export default Modal;