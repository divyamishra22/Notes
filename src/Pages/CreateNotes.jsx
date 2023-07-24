import React, { useState } from 'react'
import './CreateNotes.css'
import api from '../api/index1'

const MyNotes = () => {

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("")
  // const [tag, settag] = useState('')
 


 
 
  const  handlenote= async(e)=>{
    e.preventDefault();
   const res = await api.post(`http://ec2-16-171-177-112.eu-north-1.compute.amazonaws.com:3000/note/createyournote`, {title, description},
         
          {headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt"),
            
          },})
          
          
       
         
           console.log(res)
           console.log(res.data)
         
           settitle(''),
           setdescription('')
          
  }


  return (
    
    <div className='create'>
   <form>
    <input className='title' placeholder='Title' value={title}  onChange={(e) => { settitle(e.target.value) }}/>
    <textarea className='description' placeholder='Description' value ={description}
     onChange={(e) => { setdescription(e.target.value) }}/>
       {/* <input className='tag' placeholder='Tag' value ={tag}
     onChange={(e) => { settag(e.target.value) }}/> */}
    <button id= 'submit'  onClick={handlenote} >Post</button>
   </form>  

  
</div>
  )
}

export default MyNotes
