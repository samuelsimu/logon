/*
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

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

      <div className={styles.container}>
        <input type="checkbox" id="flip" checked={isSignup} onChange={() => setIsSignup(!isSignup)} />
        <div className={styles.cover}>
          <div className={styles.front}>
            <img src="/images/frontImg.jpg" alt="Front" />
            <div className={styles.text}>
              <span className={styles.text1}>
                Become a coder and<br />make your dreams alive
              </span>
              <span className={styles.text2}>Code for innovation</span>
            </div>
          </div>
          <div className={styles.back}>
            <img src="/images/backImg.jpg" alt="Back" className={styles.backImg} />
            <div className={styles.text}>
              <span className={styles.text1}>
                Complete miles of journey<br />with one step
              </span>
              <span className={styles.text2}>Let's get started</span>
            </div>
          </div>
        </div>

        <div className={styles.forms}>
          <div className={styles.formContent}>
          
            {!isSignup && (
              <div className={styles.loginForm}>
                <div className={styles.title}>Login</div>
                <form onSubmit={handleLoginSubmit}>
                  <div className={styles.inputBoxes}>
                    <div className={styles.inputBox}>
                      <i className="fas fa-envelope" />
                      <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className={styles.inputBox}>
                      <i className="fas fa-lock" />
                      <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className={styles.text}>
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className={`${styles.button} ${styles.inputBox}`}>
                      <input type="submit" value="Submit" />
                    </div>
                    <div className={styles.signUpText}>
                      Don't have an account? <label htmlFor="flip">Signup now</label>
                    </div>
                  </div>
                </form>
              </div>
            )}

            
            {isSignup && (
              <div className={styles.signupForm}>
                <div className={styles.title}>Signup</div>
                <form onSubmit={handleSignupSubmit}>
                  <div className={styles.inputBoxes}>
                    <div className={styles.inputBox}>
                      <i className="fas fa-user" />
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className={styles.inputBox}>
                      <i className="fas fa-envelope" />
                      <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className={styles.inputBox}>
                      <i className="fas fa-lock" />
                      <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className={`${styles.button} ${styles.inputBox}`}>
                      <input type="submit" value="Submit" />
                    </div>
                    <div className={styles.signUpText}>
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
*/