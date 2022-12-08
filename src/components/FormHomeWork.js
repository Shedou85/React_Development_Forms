import React, { useState } from 'react'
import '../styles/Loginform.scss';

const FormHomeWork = () => {
  
 
  let [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',

    }
  );
  
  function sendLoginData(event) {
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name] : event.target.value
      }
    }
    )
    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password are not the same');
    }
  }

  



  return (
    <div>
      <div className="sign-up-modal">
          <div id="close-modal-button">
          </div>

          <div className="logo-container">
              <svg className="logo" width="94.4px" height="56px">
                  <g>
                      <polygon points="49.3,56 49.3,0 0,28 	" />
                      <path d="M53.7,3.6v46.3l40.7-23.2L53.7,3.6z M57.7,10.6l28.4,16.2L57.7,42.9V10.6z" />
                  </g>
              </svg>
          </div>

          <form className="details">
              <div className="input-container">
                  <input className="col-sm-12 firstName-input with-placeholder" 
                    name="firstName"
                    id="firstName" 
                    type="text" 
                    placeholder="First Name" 
                    />
              </div>
              <div className="input-container">
                  <input className="col-sm-5 lastName-input with-placeholder" 
                    name="lastName"
                    id="lastName" 
                    type="text" 
                    placeholder="Last Name" 
                    />
              </div>
              <div className="input-container">
                  <input className="col-sm-5 col-sm-push-2 phone-input with-placeholder" 
                    name="phone"
                    id="phone" 
                    type="text" 
                    placeholder="Phone" />
              </div>
              <div className="input-container">
                  <input className="col-sm-5 email-input with-placeholder" 
                    name="email"
                    id="email" 
                    type="text" 
                    placeholder="Email" 
                    />
              </div>
              <div className="input-container">
                  <input className="col-sm-5 password-input with-placeholder" 
                    name="password"
                    id="password" 
                    type="text" 
                    placeholder="Password" 
                    />
              </div>
              <div className="input-container">
                  <input className="col-sm-5 confirmPassword-input with-placeholder" 
                    name="confirmPassword"
                    id="confirmPassword" 
                    type="text" 
                    placeholder="Confirm Password" 
                    />
              </div>
              

              <div className="col-sm-12 form-checkbox">
                  <label>
                      <input type="checkbox" value="true" /> Keep me signed in</label>
              </div>

                <div id="sign-up-button" 
                  className="col-sm-12 sign-up-modal"
                  value="Sign Up" onClick={sendLoginData}>
                    Sign Up
                </div>
              <p>Already have an account? <a href="#signIn">Sign in</a></p>

          </form>
      </div>     
    </div>
  )
}

export default FormHomeWork