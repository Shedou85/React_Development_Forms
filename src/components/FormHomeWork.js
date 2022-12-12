import React, { useState } from 'react'
import '../styles/Loginform.scss';

const FormHomeWork = () => {
  
 
  let [inputValue, setInputValue] = useState(
    {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  );
  function sendFormData(event) {
    
    if (inputValue.password !== inputValue.confirmPassword) {
      alert('Password and confirm password are not the same');
      return;
    } else {
      console.log('Form is submitted');
    }
    event.preventDefault();
  }
    function getLoginData(event) {
    setInputValue(prev => {
      return {
        ...prev,
        [event.target.name] : event.target.value
      }
    } 
  )
    
} 
    console.log(inputValue);
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='title'>
           <h1>Login Form</h1>
        </div>
        <form onSubmit={sendFormData}>
          <div className='form-container'>
            <input type='text' 
            className='login-input'
            placeholder='First Name' 
            name='firstName' 
            value={inputValue.firstName} 
            onChange={getLoginData} />

            <input type='text' 
            className='login-input'
            placeholder='Last Name' 
            name='lastName' 
            value={inputValue.lastName} 
            onChange={getLoginData} />

            <input type='text' 
            className='login-input'
            placeholder='Phone' 
            name='phone' 
            value={inputValue.phone} 
            onChange={getLoginData} />

            <input type='text' 
            className='login-input'
            placeholder='Email' 
            name='email' 
            value={inputValue.email}
            onChange={getLoginData}
            />

            <input type='password' 
            className='login-input'
            placeholder='Password' 
            name='password'
            value={inputValue.password}
            onChange={getLoginData}
            />

            <input type='password' 
            className='login-input'
            placeholder='Confirm Password' 
            name='confirmPassword'
            value={inputValue.confirmPassword}
            onChange={getLoginData}
            />
          </div>
          <div className='submit'>
          <button className='submit-btn'>Submit</button>
        </div>
        </form>
       
        
      </div>
    </div>
  )
}

export default FormHomeWork