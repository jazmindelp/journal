import React, { useRef } from 'react'
import { auth, provider} from '../Firebase'
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const Welcome = ({setIsAuth}) =>{
    
    let navigate = useNavigate();
        
    const signInWithGoogle = () =>{
 
          signInWithPopup(auth, provider).then((result) =>{
              localStorage.setItem("isAuth", true);
              setIsAuth(true)
              navigate('/home') 
            
          }).catch((error) =>{
              console.log(error);
          });
         
      }
    const ref = useRef();
    return (
       <div className='welcome-page'>
              <h1 id='app-title'>Journal</h1>
            <div className='welcome-container'>
         
            <h1 className='welcome-title'>WELCOME</h1>
            <p className='welcome-text'>Let us help you remember things</p>
            <button onClick={signInWithGoogle} className="login">
                Log in with Google
            </button> 
            <div className='info'>
                <p className='info-title'>About me</p>
                <a href="https://www.linkedin.com/in/jazm%C3%ADn-del-puerto-61397222a/" target="_blank" rel="noopener noreferrer">
                    <img  className="icon"src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=""/>
                </a>
                    
                <a href="https://github.com/jazmindelp" target="_blank" rel="noopener noreferrer">
                    <img className="icon"src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt=""/>
                </a>
                        </div>
                     
            </div>
        
           
        </div>
           
        
    )
};

export default Welcome;
