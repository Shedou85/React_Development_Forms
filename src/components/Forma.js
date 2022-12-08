import React, { useState } from 'react';
import  '../styles/Formcss.scss';
import '../styles/Loginform.scss';

function Forma() {
  
   const [formData, setFormData] = useState(
     {
     firstName: '',
     lastName: '',
     }
   );
  console.log(formData);
   function inputChange(event) {
     setFormData(prev => {
       return {
         ...prev,
         [event.target.name] : event.target.value
       }
     } 
    )
   }
 
   return (
     <div className="App">
       <div className="container">
         <div className="form-wrapper">
           <div className="form-item">
             <input 
             type="text" 
             className="form-name" 
             placeholder="First Name" 
             name="firstName" 
             onChange={inputChange}/>
 
             <input type="text" 
             className="form-name" 
             placeholder="Last Name" 
             name="lastName" 
             onChange={inputChange}/>
 
           </div>
           <div className="input-galery">
             <div className="nameputput">Name - {formData.firstName}</div>
             <div className="lastName">LastName - {formData.lastName}</div>
           </div>
         </div>
       </div>
       
     </div>
   );
 }

 export default Forma;