import React from 'react';



const HomePage: React.FC = () => {
  return (

 <>
  <meta charSet="UTF-8" />
  {/*<title> Login and Registration Form in HTML & CSS | CodingLab </title>*/}
  <link rel="stylesheet" href="style.css" />
  {/* Fontawesome CDN Link */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  

    <div className="container">
  <input type="checkbox" id="flip" />
  <div className="cover">
    <div className="front">
      <img src="images/frontImg.jpg" alt="" />
      <div className="text">
        <span className="text-1">
          Become a coder and
          <br /> make your dreams alive
        </span>
        <span className="text-2">Code for innovation</span>
      </div>
    </div>
    <div className="back">
      <img className="backImg" src="images/backImg.jpg" alt="" />
      <div className="text">
        <span className="text-1">
          Complete miles of journey <br /> with one step
        </span>
        <span className="text-2">Let's get started</span>
      </div>
    </div>
  </div>
  <div className="forms">
    <div className="form-content">
      <div className="login-form">
        <div className="title">Login</div>
        <form action="#">
          <div className="input-boxes">
            <div className="input-box">
              <i className="fas fa-envelope" />
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Enter your password"
              
              />
            </div>
            <div className="text">
              <a href="#">Forgot password?</a>
            </div>
            <div className="button input-box">
              <input type="submit" defaultValue="Sumbit" />
            </div>
            <div className="text sign-up-text">
              Don't have an account? <label htmlFor="flip">Sigup now</label>
            </div>
          </div>
        </form>
      </div>
      <div className="signup-form">
        <div className="title">Signup</div>
        <form action="#">
          <div className="input-boxes">
            <div className="input-box">
              <i className="fas fa-user" />
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div className="input-box">
              <i className="fas fa-envelope" />
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div className="input-box">
              <i className="fas fa-lock" />
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="button input-box">
              <input type="submit" defaultValue="Sumbit" />
            </div>
            <div className="text sign-up-text">
              Already have an account? <label htmlFor="flip">Login now</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
 </div>
 </>

    
  );
};

export default HomePage;
