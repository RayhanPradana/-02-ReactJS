import React, { useState } from 'react';

function Biodata() {
    const [name, setName] =  useState('')
    const [age, setAge] =  useState(0)
    const [email, setEmail] =  useState('')

    const handleNameChange = (e) => {
      setName(e.target.value);  
    };
    
    const handleAgeChange = (e) => {
        setAge(e.target.value);  
      };
      
    const handleEmailChange = (e) => {
        setEmail(e.target.value);  
      };

      return(
        <div>
            <input 
              type="text" 
              placeholder="Nama" 
              value={name} 
              onChange={handleNameChange}>
            </input>
            <input 
              type="number" 
              placeholder="Umur" 
              value={age} 
              onChange={handleAgeChange}>
            </input>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={handleEmailChange}>
            </input>
            <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>        
        </div>
      );
}

export default Biodata;