import React, { useState } from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  // Handle form submissions
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };

  const handleSignupSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle signup logic here
  };

  return (
    <>
      <Head>
        <title>SGS - Login & Registration</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Login and Registration Page" />
        <meta name="author" content="SGS" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <div className="container">
        <input type="checkbox" id="flip" checked={isSignup} onChange={() => setIsSignup(!isSignup)} />
        <div className="cover">
          <div className="front">
            <img src="/images/frontImg.jpg" alt="Front" />
            <div className="text">
              <span className="text1">
                Become a coder and<br />make your dreams alive
              </span>
              <span className="text2">Code for innovation</span>
            </div>
          </div>
          <div className="back">
            <img src="/images/backImg.jpg" alt="Back" className="backImg" />
            <div className="text">
              <span className="text1">
                Complete miles of journey<br />with one step
              </span>
              <span className="text2">Let's get started</span>
            </div>
          </div>
        </div>

        <div className="forms">
          <div className="formContent">
          
            {!isSignup && (
              <div className="loginForm">
                <div className="title">Login</div>
                <form onSubmit={handleLoginSubmit}>
                  <div className="inputBoxes">
                    <div className="inputBox">
                      <i className="fas fa-envelope" />
                      <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className="inputBox">
                      <i className="fas fa-lock" />
                      <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="text">
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="button inputBox">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="signUpText">
                      Don't have an account? <label htmlFor="flip">Signup now</label>
                    </div>
                  </div>
                </form>
              </div>
            )}

            
            {isSignup && (
              <div className="signupForm">
                <div className="title">Signup</div>
                <form onSubmit={handleSignupSubmit}>
                  <div className="inputBoxes">
                    <div className="inputBox">
                      <i className="fas fa-user" />
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="inputBox">
                      <i className="fas fa-envelope" />
                      <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className="inputBox">
                      <i className="fas fa-lock" />
                      <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="button inputBox">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="signUpText">
                      Already have an account? <label htmlFor="flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
