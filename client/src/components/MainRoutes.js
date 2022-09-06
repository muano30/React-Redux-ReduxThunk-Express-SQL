import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LoginFormAdmin from './AdminLoginForm';
import RegisterFormAdmin from './AdminRegister';
import Home from './Home'

const Main = () => {

    return(
        <div>        
            <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/loginForm" element={<LoginForm/>}></Route>
                <Route path="/registerForm" element={<RegisterForm/>}></Route>
                <Route path="/loginFormAdmin" element={<LoginFormAdmin/>}></Route>
                <Route path="/registerFormAdmin" element={<RegisterFormAdmin/>}></Route>
            </Routes>
        </Router>
        </div>

    )

}

export default Main;