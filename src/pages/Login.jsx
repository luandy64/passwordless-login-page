import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleLogIn = e => {
        e.preventDefault();
        console.log({username, password})
    }

    return (
        <div>
            <h1>
                Login Page
            </h1>
            <form onSubmit={handleLogIn}>
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
                    <button type="submit">Log In</button>
                </div>
            </form>            
            <span>
                Don't have an account?
                <Link to="/signup">Sign up</Link>
            </span>
            <br />
            <span>
                Go back <Link to="/">Home</Link>
            </span>
        </div>
    )
}

export default Login;