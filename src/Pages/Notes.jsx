import { useCallback, useEffect, useMemo , useState} from "react"
import React   from 'react'
import { useNote } from "../hooks/Notes"
import './Notes.css'
import { Link } from 'react-router-dom';
import {
   FaPen 
  
} from "react-icons/fa";
import { BsTrash } from "react-icons/bs";


const Notes = () => {
 
const {getnotes, notes, } = useNote();
const [modalOpen, setModalOpen] = useState(false);

console.log("hii")
if(notes)
{console.log(notes)}
 
  useEffect(()=>{
  
  getnotes()
  // initialnotes()
  },[])

 
  const handledelete = (id)=>{

   
     console.log(id)
    fetch(`https://notefinal.onrender.com/note/deleteyournote/${id}`, {
      method: "delete",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
        
      },
      })
    .then(res => res.json())
      .then(data => {
       console.log(data)
       
     
     
      })
   

  }

 
  

  const loadingMemo = useMemo(() => !(notes && notes[0] ), [notes]);

  if (loadingMemo) {
    return <p>Loading..</p>;
  } 

  

    return(
      <>
     
        <div className="start">
      <h1>My Notes</h1>
      <div className="grid">
      {notes[0].map((note)=>{
        const {_id, title, description} = note;
        return(
          <div className="container" key={_id}>
            {/* <div className="icon" style={{textAlign: 'right', marginRight:'8px'}}>
            <FaPen onClick={() => setModalOpen(true)} />
            { modalOpen && <Modal  note={note} setModalOpen={setModalOpen}/>}  
            
            </div> */}
            

          
            <div className="icon" style={{textAlign: 'right', marginRight:'8px', }}>
            <Link to={`/Edit/${_id}`}>
             <FaPen style={{color: 'black', marginRight:'6px'}}/>
             </Link>
             <BsTrash  onClick={()=>{handledelete(_id)}}/>
             </div> 
            

          
            <h2 >{title.slice(0, 15).toUpperCase()}</h2>
            <p>{description.slice(0, 20)}</p>

            <Link to={`/notes/${_id}`}>
            <span style={{color: 'black'}}  >Read More...</span>
            </Link>
            {/* <Modal  note={note} />  */}
          </div>
        )

        })}
        </div>
        </div>
       
        </>

    )
  

 

  
}

export default Notes
