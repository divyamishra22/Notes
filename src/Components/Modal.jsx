import React, { useState , useEffect} from 'react'


import { useParams } from 'react-router-dom';
import Edit from './Edit';

const Modal = () => {

    const{id} = useParams();

  



     const [note, setnote] = useState("")
    

useEffect(()=>{

    



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





// const [edit , setedit] = useState({
//    initial
// })





//     const editNote = async({title, description})=> {
      
        
//       const res = await api.patch(`http://localhost:3000/note/updateyournote/${id}`, {
//        title,
//        description
//       },
//       {
//         headers:{
//           "Authorization": "Bearer " + localStorage.getItem("jwt")   
//         }
//       }
//       );
//       console.log(res.data);
   
  
//   }


//   const loadingMemo = useMemo(() => !(initial), [initial]);

//   if (loadingMemo) {
//     return <p>Loading..</p>;
//   }  


//   const toggleclose = useCallback(() => {
//     setModalOpen(false);
//   },)


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { title, description } = initial;
    //     // console.log(edit);
    //     editNote({ title, description})
        
    //   };

    //   const handleChange = (e) => {
    //     setedit({ ...edit , [e.target.name]: e.target.value  });
    //   };

  return (
    <>
    <div className='cen'>
      {/* <div className='centered'>

     <form >
        <input className='title' name='title' placeholder='Title'  value ={edit.title}
     onChange={handleChange}/>

  <input className='description' name='description' placeholder='Description' value ={edit.description}
     onChange={handleChange}/>

     

     <button type="submit"onClick={handleSubmit}>Update</button>
    </form>
   
     

    </div> */}

{note && <Edit  note={note}/>}
    </div>

    </>

// console.log(note)

  )
}

export default Modal
