import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2 className="mybrand-logo">Instagram</h2>
                <input
                type="text"
                placeholder="email"
                />
                <input
                type="text"
                placeholder="password"
                />
                <button className="btn waves-effect waves-light #2979ff blue accent-2">Log In</button>
                <h5>
                    Don't have an Account? <Link to="/signup" className="myLink"> Sign Up</Link>
                </h5>
            </div>
        </div>
    )
}

export default Login;