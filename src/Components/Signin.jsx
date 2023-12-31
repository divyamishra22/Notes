import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import './SignIn.css'
import {useAuth}  from '../hooks/Auth'
import './Signin.css'

const SignIn = () => {

  const navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const {SignIn, } = useAuth();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
        alert("Email or Password cannot be blank");
    }
    else {
        SignIn({email, password})
        navigate("/Notes")
    }
    setemail('');
    setpassword('');
};

  return (
    <div className='signin'>
      <div className='signincontainer'>
        
        <div className='loginform'>
        {/* <img src={logo} style={{width:'230px'}} alt="logo" /> */}
        <span style={{marginBottom: '20px'}}>Log in to view Notes </span>
          <input type="name" name="email" id="email" value={email} placeholder='Email'
           onChange={(e) => { setemail(e.target.value) }}/>
       
          <input type="password" name="password" id="password"   value={password} placeholder='Password'
           onChange={(e) => { setpassword(e.target.value) }}/>
       
        <button type='submit' id="login-btn"  onClick={handleSubmit} >LogIn</button>
        </div>
      
      <div className="loginform2" >
          <p>Don't have an account ?
          <Link to="/">
            Sign Up
          </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn
