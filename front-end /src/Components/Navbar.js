import React, { Component } from 'react';
import './Navbar.css';
import AppDrawer from './AppDrawer';


export class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            appDrawerOpen: false
        }
    }
    
    drawerTogglerClickHandler = () => {
        this.setState((prevState) => {
            return { appDrawerOpen: !prevState.appDrawerOpen }
        })
    }

    render() {
        return (
            <div id='navbar'>
            <div className='navbar-title'><h1>Cheftastic</h1></div>
            <div className='navbar-menu-icon'><i onClick={this.drawerTogglerClickHandler} className="fas fa-bars"></i></div>    
            <AppDrawer show={this.state.appDrawerOpen} />
            </div>
        )
    }
}

export default Navbar
