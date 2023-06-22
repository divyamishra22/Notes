import React, {useState} from 'react'
// import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/Auth'
import { FaSearch,  FaUser } from 'react-icons/fa';
import './Navbar.css'
import Search from './Search';



const Navbar = () => {

  const [modalOpen, setModalOpen] = useState(false);

const {user,signOut} = useAuth();

  return (
    <>
   
   <div className='wrapper'>
    <div className='navbar'>
     <ul className='nav-menu'>
      {/* <Link to="SignUp">
      <li>SignUp</li>
      </Link>

      <Link to="SignIn">
      <li>SignIn</li>
      </Link> */}

     
      <Link to="/Notes">
      <li>Home</li>
      </Link>

      <Link to="/CreateNotes">
      <li>CreatePost</li>
      </Link>
        

      {/* <Link to="/Search"> */}
        <li  onClick={() => setModalOpen(true)}
        style={{cursor: 'pointer'}}><FaSearch color="#ccc" size={15} /> Search</li>
        {/* </Link> */}
        { modalOpen && <Search setModalOpen={setModalOpen}/>}     
    

      {/* <Link  to={`/profile/${user && user.username}`}>
        <li>  <FaUser color="#222" size={25} /> Profile</li> */}
       
      {/* </Link> */}
      <li>
        <button id='btn' onClick={signOut}>LogOut</button>
        </li>


     </ul>
    </div>
    </div>
    </>
  )
    
}

export default Navbar
