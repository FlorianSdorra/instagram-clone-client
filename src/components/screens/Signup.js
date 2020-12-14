import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2 className="mybrand-logo">Instagram</h2>
                <input
                type="text"
                placeholder="name"
                />
                <input
                type="text"
                placeholder="email"
                />
                <input
                type="text"
                placeholder="password"
                />
                <button className="btn waves-effect waves-light #2979ff blue accent-2">Sign Up</button>
                <h5>
                    Have an Account? <Link to="/login" className="myLink"> Log In</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup;