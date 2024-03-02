import React, { useState } from 'react'
import  './style.css';

function LoginForm() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSignupClick = () => {
    setIsLoginForm(false);
  };

  const handleLoginClick = () => {
    setIsLoginForm(true);
  };

  const handleSignupLinkClick = (event) => {
    event.preventDefault();
    handleSignupClick();
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLoginForm ? 'login' : 'signup'}`}>Login Form</div>
        <div className={`title ${isLoginForm ? 'signup' : 'login'}`}>Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLoginForm} onChange={handleLoginClick} />
          <input type="radio" name="slide" id="signup" checked={!isLoginForm} onChange={handleSignupClick} />
          <label htmlFor="login" className="slide login">Login</label>
          <label htmlFor="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="#" className={isLoginForm ? 'login' : 'signup'}>
            <div className="field">
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
           
            {isLoginForm && <div className="pass-link"><a href="#">Forgot password?</a></div>}
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value={isLoginForm ? 'Login' : 'Signup'} />
            </div>
            {!isLoginForm && <div className="signup-link">Not a member? <a href="#" onClick={handleSignupLinkClick}>Signup now</a></div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
