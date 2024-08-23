import React, { useState } from 'react';
import'../Styles/signform.css';



const SignupForm =()=>{

 const [username, setUsername] = useState('');//use react hook here! 
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 
 const handleSubmit = (event) =>{

    event.preventDefault();// prevent the default form submission

    console.log({username,email,password});

    }
//validation of Signup form - JS

var  isValid = 'true';
var error ='';

if (username === ""){
    isValid="false";
    error+="Username should not empty"
    console.log(error);
   
}

if(email ===""){
    isValid="false";
    console.log(error+="Email Should not empty")
}  

if(password===""){
    isValid="false";
    error +="Password should not empty";
}else if(password.length< 6){
    isValid = false;
    errorMessage += "Password must be at least 6 characters long\n";   
}

if(!isValid){
    alert(error)
    return false;
}



return( 
    
    
        <div className='fcontainer'>
           
            
        <form onSubmit={handleSubmit} name='s-form'>   

            <div >
                <h1 className='form-title'>Signup</h1>
            </div>
            <div className='input-username'>
                <label className='label-one'>Username</label>
                <input 
                    type="text"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    />
            </div>
            <div className='input-username'>
            <label className='label-two'>Email</label>
                  <input 
                        type="email"  
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
            </div>
               <div className='input-username'>
               <label className='label-three'>Password</label>
                  <input 
                       type="password"
                       value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                       />
                </div>
                <div >
                    <button className='btn'>Signup</button>
                </div>
                <div className='login-click'>
            
       <a href='/login'>Click here to LogIn</a> 
            
                </div>
                
                </form>
                
                </div>
    );
}
export default SignupForm;