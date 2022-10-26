import { useNavigate } from "react-router-dom";
import TasksOverview from "../components/TasksOverview";
import TasksContainer from "../components/TasksContainer";
import { useEffect, useState } from "react";
import CreateTask from "../components/CreateTask";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";


const Tasks = () =>{
    let navigate = useNavigate();

    const[doneTasks, setDoneTasks] = useState(0);
    const [isDone, setIsDone] = useState(false);

    
 
    return(

    <>
        <div className="top-bar">
        <div className="go-back"
            onClick={ () => navigate('/home')}>
        
          <p className="go-back-text">Go back</p>  
            
            <img 
                className="go-back-page-icon"
                src="https://static.thenounproject.com/png/2961062-200.png" alt=""/>
           
        </div>
        </div>

        

        <TasksContainer isDone ={isDone} setIsDone ={setIsDone} doneTasks ={doneTasks} setDoneTasks={setDoneTasks}/>


    </>
    )
}

export default Tasks;