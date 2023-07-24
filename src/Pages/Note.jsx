import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNote } from "../hooks/Notes"
import api from '../api/index1';
 import './Note.css'


const Note = () => {
    const { id } = useParams();
    // const {getNote, note} = useNote();
    const [note, setnote]  = useState("");

    useEffect(()=>{


       
  
        //     const res = await api.put(`http://localhost:3000/note/${id}`, )
        //     console.log(res)
        //     console.log(res.data)
    
        //         setnote(res.data);
               
        //    }
     

        fetch(`http://ec2-16-171-177-112.eu-north-1.compute.amazonaws.com:3000/note/${id}`, {
            method: "put",
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("jwt"),
              
            },
            })
          .then(res => res.json())
            .then(data => {
             console.log(data)
             setnote(data)
            })
       

    },[id]);

    

  return (
   <>
   {/* <div className='class1'> */}
    <div className='card'>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
    </div>
    {/* </div> */}
    </>
   
  )
}

export default Note
