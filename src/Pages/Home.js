import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import StickyNote from "../components/StickyNote";
import NewEntry from "../components/NewEntry";
import MainBar from "../components/MainBar";
import { useState } from "react";
import CreateTask from "../components/CreateTask";

const Home = ({signUserOut, isAuth}) =>{

    const [showCreateTask, setShowCreateTask] =useState(false);
   
    const [pickDate, setpickDate] = useState(new Date())
       
    const onDateChange = (newDate) => {
        setpickDate(newDate);
        
      }
   
    return(
        <div className="home">
           
        <div className="side-home">
            <Calendar  onClickDay={ ()=> setShowCreateTask(true)} value={pickDate} onChange={onDateChange}/>
            
            <StickyNote />
            
        </div>
        {showCreateTask === true ? <CreateTask setShowCreateTask={setShowCreateTask} pickDate={pickDate}/>: <></>}
    
        <div className="main">
            <MainBar signUserOut={signUserOut} isAuth={isAuth}/>
            <NewEntry />
            
        </div>
     
 
        </div>
    )
};

export default Home;