import React from 'react'
import { auth } from './firebase';
import "./Login.css";
import linkedinLogin from './Resources/linkedinLogin.png';

function Login() {

    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = () => {

    };

    return (
        <div className='login'>
            <img src={linkedinLogin} alt="" />

            <form>
                <input placeholder="Full Name (Required)" type="text" />

                <input placeholder="Profile Pic URL (optional)" type="text" />

                <input placeholder="Email" type="email" />

                <input placeholder="Password" type="password" />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
