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
  console.log(formData);
  function sendLoginData(event) {
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name] : event.target.value
      }
    }
    )
    if (formData.password !== formData.confirmPassword) {
      console.log('Password and Confirm Password are not the same');
    }
  }
  function getLoginData(e) {
    setFormData(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    }
  )} 



  



  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='title'>
           <h1>Login Form</h1>
        </div>
        <div className='form-container'>
          <input type='text' 
          className='login-input'
          placeholder='First Name' 
          name='firstName' 
          value={formData.firstName} 
          onChange={getLoginData} />

          <input type='text' 
          className='login-input'
          placeholder='Last Name' 
          name='lastName' 
          value={formData.lastName} 
          onChange={getLoginData} />

          <input type='text' 
          className='login-input'
          placeholder='Phone' 
          name='phone' 
          value={formData.phone} 
          onChange={getLoginData} />

          <input type='text' 
          className='login-input'
          placeholder='Email' 
          name='email' 
          value={formData.email}
          onChange={getLoginData}
          />

          <input type='text' 
          className='login-input'
          placeholder='Password' 
          name='password'
          value={formData.password}
          onChange={getLoginData}
           />

          <input type='text' 
          className='login-input'
          placeholder='Confirm Password' 
          name='confirmPassword' 
          value={formData.confirmPassword}
          onChange={getLoginData}
           />
        </div>
        <div className='submit'>
          <button className= 'submit-btn' onClick={sendLoginData}>Submit</button>

        </div>
      </div>
    </div>
  )
}

export default FormHomeWork