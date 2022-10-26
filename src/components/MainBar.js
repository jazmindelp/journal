import { useNavigate } from "react-router-dom";

const MainBar = ({signUserOut, isAuth}) =>{
  
   
    let navigate = useNavigate();
    return(
        <div className="main-bar">
            <button className="main-btn" onClick={ () => navigate('/entries')}>Entries</button>
            <button className="main-btn" onClick={()=>navigate('/notes')} >Notes</button>
            
            <button className="main-btn"  onClick={()=>navigate('/tasks')} >Tasks</button>
            { localStorage.getItem("isAuth") ? <button className="log-out"onClick={signUserOut}>Sign Out</button>: 'test'}

        </div>

    )
}


export default MainBar;