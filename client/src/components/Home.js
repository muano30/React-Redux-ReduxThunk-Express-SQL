import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import '../Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [dropDownForm, setDropDownForm] = useState({
        dropdown: '',
    })

    const navigate = useNavigate()
    navigate(dropDownForm.dropdown === "sign In as student" ? '/loginForm' : '/loginFormAdmin')
    const handleChange = (e) => {
        setDropDownForm({ ...dropDownForm, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dropDownForm.dropdown !== "") {
            navigate()
        }
    }

    return (
        <div className='wrappers'>

            {/* <LoginForm /> */}
            {/* <Link to="/loginForm">Sign In</Link>  */}
            {/* <Link to="/registerForm">Sign UP</Link> */}
             <form className='form1' onSubmit={handleSubmit}>
                <h1> CHOOSE TO SIGN IN AS:</h1>

                <select name="dropdown" onChange={handleChange} value={dropDownForm.dropdown}>
                    <option disabled selected value="">Select...</option>
                    <option className="login-option">sign In as student</option>
                    <option className="register-option">sign In as Admin</option>
                </select>
                <div>
                    <button className='formButton1' type="submit">Submit</button>

                </div>
            </form>
       

        </div>
    )
}

export default Home;