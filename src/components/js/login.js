import React from "react";
import {Link} from 'react-router-dom'
// import '../css/login.css';
function Login(params) {
    return(
        
        <div className="body">
            <section>
            <div className="login-box">
            <form action="">
                <h2>Login</h2>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" required></input>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required></input>
                    <label>Password</label>
                </div>
            
                </form>
                
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to='/register'>Register</Link></p>
                </div>
                </div>
                </section>    
        </div> 
          
    );
}
export default Login;