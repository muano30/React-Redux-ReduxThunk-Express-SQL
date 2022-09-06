
import '../Register.css';
import React from 'react';
import {Link} from 'react-router-dom';
import userForm from './UserForm';

const RegisterFormAdmin = () => {

    // const {handleChange, handleSubmit, formInfo} = userForm();

    return (
        <div className='wrapper'>
            <form className='form'>
              <h1 className='formTitle'>Admin Sign Up</h1>
              <div className='firstTwoInput'>
                <div className='formDiv'>
                    <input type="text" 
                    className='formInput grid' 
                    placeholder='First Name'
                    //  onChange={handleChange}
                      name="firstName" 
                    //   value={formInfo.firstName} 
                      ></input>
                    <label for="firstName" className='formLabel'>First Name</label>
                </div>

                <div className='formDiv'>
                    <input
                     type="text" 
                    className='formInput grid' 
                    placeholder='Last Name' 
                    // onChange={handleChange} name="lastName" 
                    // value={formInfo.lastName}
                    >

                    </input>
                    <label for="LastName" className='formLabel'>Last Name</label>

                </div>
                </div>
                <div className='formDiv'>
                    <input type="number"
                     className='formInput'
                      placeholder='Id Number'
                    //    onChange={handleChange} 
                    //    value={formInfo.IdNumber} 
                       name="IdNumber" >

                       </input>
                    <label for="id" className='formLabel'>Id Number</label>
                </div>

                <div className='formDiv'>
                    <input type="email"
                     className='formInput'
                      placeholder='Email' 
                    //   onChange={handleChange} 
                    //   value={formInfo.email}
                       name="email" >

                       </input>
                    <label for="email" className='formLabel'>Email</label>
                </div>

                <div className='formDiv'>
                    <input type="password" 
                    className='formInput' 
                    placeholder='Password' 
                    // onChange={handleChange} 
                    // value={formInfo.password}
                     name="password" >

                     </input>
                    <label for="password" className='formLabel'>Password</label>
                </div>

                <div className='formDiv'>
                    <input type="password"
                     className='formInput'
                      placeholder='Confirm Password'
                    //    onChange={handleChange} 
                    //    value={formInfo.confirmPassword} 
                       name="confirmPassword">

                       </input>
                    <label for="ConfirmPassword" className='formLabel'>Confirm Password</label>
                </div>

                

                <button className='formButton'>Sign Up</button>
<div className='LinkSignIn'>
                <p>Already have an account? click <Link to="/loginForm">here</Link> to sign in</p>
                </div>
            </form>
        </div>
    )
}

export default RegisterFormAdmin
