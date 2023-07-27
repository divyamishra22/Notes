import React, { useState } from 'react'
import './Modal.css'
import api from '../api/index1'

const Edit = ({note}) => {


  console.log(note)

    const [edit, setedit] = useState({
        title:note.title,
        description: note.description,
        id: note._id
    })



       const editNote = async({title, description, id})=> {
      
        
      const res = await api.patch(`https://notefinal.onrender.com/note/updateyournote/${id}`, {
       title,
       description
      },
      {
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("jwt")   
        }
      }
      );
      console.log(res.data);
    }




      const handleSubmit = (e) => {
        e.preventDefault();
        const { title, description,id } = edit;
        console.log(edit);
        editNote({ title, description, id})
        
      };

      const handleChange = (e) => {
        setedit({ ...edit , [e.target.name]: e.target.value  });
      };


  return (
   
         <>
    
      <div className='create'>
     <form >
       <input className='title' name='title' placeholder='Title'  value ={edit.title}
     onChange={handleChange}/>

  <textarea className='description' name='description' placeholder='Description' value ={edit.description}
      onChange={handleChange}/>

     

      <button type="submit"onClick={handleSubmit}>Update</button>
    </form>
   
     

     </div>  
     
    </>
    
  )
}

export default Edit
