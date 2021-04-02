import React from 'react';
import {Link} from 'react-router-dom'

export default function Menu(props){
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand md bg-info navbar-dark">
                <Link to="/" className="navbar-brand">React Ref Router</Link>

                <div className="collpase navbar-collapse" id='menu'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/create' className="nav-link">Create</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/edit' className="nav-link">Edit</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/login' className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/signup' className="nav-link">SignUp</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>

            
        </React.Fragment>
    )
}