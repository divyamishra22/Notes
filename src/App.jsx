
import './App.css'
import MyNotes from './Pages/CreateNotes'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import SignIn   from './Components/Signin'
import SignUp from './Components/Signup'
import Layout from './Components/Layout'
import { AuthProvider } from './hooks/Auth'
import { NoteProvider } from './hooks/Notes'
import Notes from './Pages/Notes'
import Note from './Pages/Note'
import Modal from './Components/Modal'
import Search from './Components/Search'


function App() {
 

  return (
    <>
    <Router>
      
   
    <AuthProvider>
   <NoteProvider>
   
     <Routes>
     
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/notes/:id" element={<Note/>}></Route>
      <Route  element={<Layout/>}>
      <Route path="/Notes" element={<Notes/>}></Route>
      <Route path="/Edit/:id" element={<Modal/>}></Route>
      {/* <Route path="Search" element={<Search/>}></Route> */}
      <Route path="/CreateNotes" element={<MyNotes/>}></Route>
     
      </Route>
      </Routes>
      
      </NoteProvider>
      </AuthProvider>
      </Router>

    </>
  )
}

export default App
