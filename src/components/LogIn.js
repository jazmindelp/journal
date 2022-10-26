// import { auth, provider} from '../Firebase'
// import { signInWithPopup } from 'firebase/auth';
// import Header from '../components/Header';
// import { useNavigate } from 'react-router-dom';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
    
// const LogIn = ({setIsAuth, isAuth}) =>{
    

//       let navigate = useNavigate();
        
//       const signInWithGoogle = () =>{
          
         
//           signInWithPopup(auth, provider).then((result) =>{
//               localStorage.setItem("isAuth", true);
//               setIsAuth(true);
//               navigate('/home') 
            
//           }).catch((error) =>{
//               console.log(error);
//           });
         
//       }
      
      
//         return(
    
    
            
//     <Parallax pages={1.3} 
//               style={{
                    
//                     left: '0', 
//                     borderRadius: '4px',
                    
//                     }}>
//     <ParallaxLayer
//       offset={0}
//       speed={2.5}
//       style={{ 
//           display: 'flex',
//           flexDirection: 'column', 
//           justifyContent: 'center', 
//           alignItems: 'center',
        
//           backgroundColor: '#FFFF' }}>
//           <Header />
//           <h1 className='welcome-title'>WELCOME</h1>
//           <div className='welcome'>
        
        
        
//         <p className='welcome-text'>Let us help you remember things</p> 
        
//         <button onClick={signInWithGoogle} className="login">
        
//           Log in with Google
       
//         </button>
        
        
//         </div>   
//     </ParallaxLayer>
    
//     <ParallaxLayer offset={0.9} speed={2} 
//     style={{ backgroundColor: '#7F090B',
//              height:'90vh',
//              borderRadius: '4px'
//     }} >
//         <h1 className='made'>MADE WITH</h1>
//     </ParallaxLayer>
    
    

//     </Parallax>
   
           
//         )

// }

// export default LogIn;