import React from 'react';
import './AppDrawer.css'

const AppDrawer = props => {
    let drawerClasses = 'app-drawer';
    if (props.show) {
        drawerClasses = 'app-drawer open'
    }
        return (
            <div className={drawerClasses}>
                <ul>
                    <li><a href='/Reports'>Report</a></li>
                    <li><a href='/Orders'>Create Order</a></li>
                    <li><a href='/Profile'>Profile</a></li>
                    <li><a href='/Login'>Login / Sign-up</a></li>
                </ul>
            </div>
        )
    }

export default AppDrawer
