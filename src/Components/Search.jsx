import React, { useState , useCallback} from 'react'
import api from '../api/index1'
import { Link } from 'react-router-dom';
import './Search.css'
import { BsXLg } from "react-icons/bs";


const Search = ({setModalOpen}) => {

    const[term, setTerm] = useState('')
     const[note, setnote] = useState([])



    const Searchterm = async(term)=> {
      
       
        console.log(term)
        // const res = await api.get(`http://localhost:3000/note/search/${term}`, 
        // {
        //   headers:{
        //     "Authorization": "Bearer " + localStorage.getItem("jwt")   
        //   }
        // }
        // );
        // console.log(res.data);
        // senote(res.data)
        // setTerm('')

        fetch(`https://notefinal.onrender.com/note/search/${term}`, {
            method: "get",
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("jwt"),
              
            },
            })
          .then(res => res.json())
            .then(data => {
             console.log(data)
             setnote(data) 
            setTerm('')
           
            })
      }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(term)
        Searchterm(term)
        
      };

      const handleChange = (e) => {
        setTerm(e.target.value  );
      };



  return (
    <div className='searchclass'>

       <div className='icon' style={{textAlign: 'right', marginRight:'8px', }}>
       <BsXLg style={{cursor: 'pointer'}}  onClick={() => setModalOpen(false)}/>
       </div>
      <input className='searchinput' placeholder='Search by title keywords' value={term}
         onChange={handleChange}/>
      <button className='submit' onClick={handleSubmit}>Search</button>
      <hr/>
      <div className='notesearch' style={{textAlign: 'center'}}>
      {note.length>0? (
            // note.map((n)=>{
                <Link to={`/notes/${note[0]._id}`}>
               <h2>{note[0].title}</h2> 
                  </Link>
            // })
         
      ):(
        <p>No Results</p>
        )}
        </div>
    </div>
  )
}

export default Search
