import React from "react";
import './Reg.css';
function Reg() {
    return(
        
        <div id="registration-section" className="body">
            <section>
            <div className="login-box">
            <form action="">
                <h2>Registration</h2>
                <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" required></input>
                    <label>Leader</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="text" required></input>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required></input>
                    <label>Password</label>
                </div>
                <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" required></input>
                    <label>Team Name</label>
                </div>
                <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" required></input>
                    <label>What's App number</label>
                </div>
                <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" required></input>
                    <label>Player 2</label>
                </div>
                <div className="input-box">
                    <span className="icon"></span>
                    <input type="text" required></input>
                    <label>Player 3</label>
                </div>
                </form>
                
                <button type="submit">Submit</button>
                <div className="register-link">
                    <p>Already have an account? <a href="#">Login</a></p>
                </div>
                </div>
                </section>    
        </div> 
          
    );
}
export default Reg;