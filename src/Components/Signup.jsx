import React,{ useState } from 'react'
import './Signup.css'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'


const SignUp = () => {


  const navigate = useNavigate()
 
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
   const [name, setName] = useState("");
   const [isError, setIsError] = useState("");
  


   const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password  || !name) {
        alert("Cannot be blank");
    }
    else {
        getMyPostData();
    }
    setemail('');
    setpassword('');
    setName('');
   

};

  
  const getMyPostData = async () => {
    try {
      const res = await axios.post("https://notefinal.onrender.com/user/signup",{
        password: password,
        email:email,
        name: name,
      })
     
      // setMyData(res.data);
    
      navigate("/SignIn")
      console.log(res);
    } catch (error) {
      setIsError(error);
    }


  };
  return (
    <>
    
    <div className='form0' >
      <div className='form1'>
    <form   onSubmit={handleSubmit}>
    <span  >Register to upload Notes </span>
    
      <input type= "text" name="username" id="name" placeholder="Name"
       onChange={(e) => { setName(e.target.value) }}/>
    
    
    
      <input type= "email" name=" email" id="email" value={email} placeholder="Email"
       onChange={(e) => { setemail(e.target.value) }}/>
   
   
      <input type= "password" name=" password" id="password"   value={password} placeholder="Password" 
       onChange={(e) => { setpassword(e.target.value) }}/>
   
   
      {/* <input type= "text" name="username" id="bio" placeholder="Bio"
       onChange={(e) => { setbio(e.target.value) }}/>
    */}
  
    <p>  By registering you accept our conditions, cookie policies and
            services</p>
    <button type="submit" id="submit-btn"  >SignUp</button>
   
    
    
    </form>
    <div className='form3'>
    <p>Aready have an Account?
    <Link to="/SignIn">
    SignIn
    </Link>
    </p>
    </div>
    </div>
    </div>
    
    
    </>
  )
}

export default SignUp
