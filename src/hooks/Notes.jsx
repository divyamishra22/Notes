import api from '../api/index1';
import { useNavigate } from "react-router-dom";
import { createContext, useCallback, useContext, useState } from 'react';


const NoteContext = createContext();

export function NoteProvider({ children }) {
  
    const [notes, setnotes] = useState([])
    // const [note, setnote]  = useState();

    const getnotes = useCallback( async()=>{
  
        const res = await api.get(`http://ec2-16-171-177-112.eu-north-1.compute.amazonaws.com:3000/note/getyournote`, 
              
               {headers: {
                 "Authorization": "Bearer " + localStorage.getItem("jwt"),
                 
               },})
                console.log(res)
                console.log(res.data)
                const length = res.data.length
              
                if(length)
                { 
                    setnotes([res.data]);
                    
                }
               
                // console.log(notes)
                // setnotes(res.data);
               
     
      
       })


       const initialnotes = useCallback( async()=>{
  
        const res = await api.get(`https://jsonplaceholder.typicode.com/posts`, )
        console.log(res)
        console.log(res.data)
        const length = res.data.length
      
        if(length)
        { 
            setnotes([res.data]);
            
        }
       
               
     
      
       })


      //  async function getNote(id) {
  
      //   const res = await api.put(`http://localhost:3000/note/${id}`, )
      //   console.log(res)
      //   console.log(res.data)

      //       setnote(res.data);
           
      //  }
      


     
      
  return (
      <NoteContext.Provider
        value={{
            notes,
         getnotes,
        //  note,
        //  getNote,
         initialnotes
        }}
      >
        {children}
      </NoteContext.Provider>
    );
  }
  
  
  export function useNote() {
    const context = useContext(NoteContext);
    if (!context) {
      throw new Error('use Note must be used within a NoteProvider  ');
    }
    return context;
  }