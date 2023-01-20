import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Client } from '@passwordlessdev/passwordless-client';


const Signup = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();    

    const handleSignUp = e => {
        e.preventDefault();
        console.log({username, password})
    }

    return (
        <div>
            <h1>
                Signup Page
            </h1>
            <form onSubmit={handleSignUp}>
                <label>
                    <p>Username</p>
                    <input 
                        type="text"
                        onChange={e => setUserName(e.target.value)}
                        />
                </label>
                <label>
                    <p>Password</p>
                    <input 
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        />
                </label>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>            
            <span>
                Already have an account?
                <Link to="/login">Log in</Link>
            </span>
            <br />
            <span>
                Go back <Link to="/">Home</Link>
            </span>            
        </div>
    )
}

export default Signup;