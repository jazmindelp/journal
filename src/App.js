
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

import Notes from "./Pages/Notes";
import Entries from "./Pages/Entries";
import Tasks from "./Pages/Tasks";


const App = () =>{
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth)

  let navigate = useNavigate();
  const signUserOut = () =>{
    signOut(auth).then (()=> {
      localStorage.clear()
      setIsAuth(false)
      navigate('/')
    })

  }
  return(
    <>
    
 
    <Routes> 
     
      
      <Route path="/home" element= { <Home signUserOut={signUserOut} isAuth={isAuth}/> }/>

      <Route path="/" element= { <Welcome setIsAuth={setIsAuth} isAuth={isAuth} /> }/>

      <Route path="/entries" element= { <Entries /> }/>

      <Route path="/notes" element= { <Notes /> }/>

      <Route path="/tasks" element= { <Tasks /> }/>

   
    </Routes>

    </>
  )
}

export default App;
