import React from 'react';
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h3 className="navbar-brand">Settings</h3>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/groups">Groups</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)