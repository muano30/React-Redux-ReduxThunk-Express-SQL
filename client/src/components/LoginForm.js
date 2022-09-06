import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import userForm from './UserForm';

const LoginForm = () => {
// const {handleInputs, handleLogin, logInForm} = userForm();
    return (
        <div className='wrapper'>
            <form className='form'>
              <h1 className='formTitle'>Sign In</h1>
                <div className='formDiv'>
                    <input type="email" 
                    className='formInput'
                    //  onChange={handleInputs} 
                     name="email"
                    //  value={logInForm.email}
                      placeholder='Email'
                       ></input>
                    <label for="email" className='formLabel'>Email</label>
                </div>

                <div className='formDiv'>
                    <input type="password" 
                    className='formInput' 
                    // onChange={handleInputs}
                    //  value={logInForm.password} 
                     name="password" 
                     placeholder='Password'
                      ></input>
                    <label for="password" className='formLabel'>Password</label>
                </div>
{/* <p className="forgotPassword">Forgot Password</p> */}
                <button className='formButton'>Sign In</button>
                <div className='Link'>
<p>Don't have an account yet? </p><Link to="/registerForm">Sign Up</Link>
</div>
                
            </form>
        </div>
    )
}

export default LoginForm;
