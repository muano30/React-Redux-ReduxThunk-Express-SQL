import {useState,useEffect} from 'react';


const UserForm = () => {

const [formInfo, setFormInfo] = useState({
    firstName:"",
    lastName: "",
    IdNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
 });

 const [logInForm, setLogInform] = useState({
     email: "",
     password: "",
 });

const handleChange = (e) => {
    const[name, value] = e.target.value
    setFormInfo({...formInfo, [name]: value})
}

const handleInputs = (e) => {
    const[name, value] = e.target.value
    setLogInform({...logInForm, [name]: value})

}

const handleSubmit = (e) => {
    e.prevent.Default();

};

const handleLogin = (e) => {
    e.prevent.Default();
};

return{    
    handleChange,
    handleInputs,
    handleLogin,
    handleSubmit,
    logInForm,
    formInfo,
}
}


export default UserForm;