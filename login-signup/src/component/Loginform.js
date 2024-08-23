import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import'../Styles/loginform.css';



const LoginForm = ()=>{
 const[username, setUsername]  = useState('');
 const[password,setPassword] = useState('');


// create here submission event - regular function

const handleSubmit=(e)=>{
    e.preventDefault();

    console.log(username, password)
};

return(
    <div className='lcontainer'>
       <h1 className='lform-title'>LogIn</h1>
       
    <form onSubmit={handleSubmit}>
        <div className='user-one'>
        
            <label className='label-one'>Username</label>
            <input
             type="username"
             value={username}
             placeholder='enter username'
             required
             // syntax of handle events in jsx
             onChange={(e) =>setUsername(e.target.value)}  // even happen when user click the in the input field
            />
        </div>

        <div className='password-one'>
            <label className='label-two'>Password</label>
            <input
               type="password" 
               value={password}
               required
               placeholder='enter password'
               onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <div>
            <button type="submit" className='btn'> LogIn </button>
        </div>
    </form>
    <div className='signup-click'>
       <a href='/signup'>Click here to Signup</a> 
    </div>
    </div>
)
}
export default LoginForm;