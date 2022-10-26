

import { addDoc, collection, deleteDoc, doc, getDocs, increment, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Boop from "../animations/DeleteIcon";
import { db } from "../Firebase";

const TasksContainer = ({isDone, doneTasks, setIsDone, setDoneTasks}) =>{

    const [tasksList, setTasksList] = useState([]);
    
    const [emptyTaskList, setEmptyTaskList] = useState(false);

    const [updateTasks, setUpdateTasks] = useState(false);

    const q = query(collection(db, "tasks"), orderBy("createdAt", "asc"));

    const deleteTask = async(id) =>{
        const taskDoc = doc(db, "tasks", id)
        await deleteDoc(taskDoc)
        setUpdateTasks(!updateTasks)
        if(tasksList.length === 1){
            setEmptyTaskList(true);
        }
    }
    
    const [ priorityFilter, setPriorityFilter] = useState("all")
    const hanldeFilter = (event) =>{
        setPriorityFilter(event.target.value)
        
    }
    useEffect(() => {
        const getTasks = async() =>{
            const data = await getDocs(q);
            if(data.docs.length === 0){
                setEmptyTaskList(true)
            }
            setTasksList( data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        }
            getTasks()
    }, [updateTasks, priorityFilter])

   
    const handleChange = event => {
        if(event.target.checked){
            setIsDone(!isDone);
            setDoneTasks(doneTasks+1);
            
        }    
    }


    return(
        <div className="tasks-container">
    
        
        <div className="task-info">
            <div className="upcoming-tasks-title">
        <p className="upcoming-tasks">All tasks</p>
        
        <div className="filter-by">
        <p className="upcoming-tasks">Filter by tag </p>
        <div className="select-container">
            <select name="select" className="filter-by-select" onChange={hanldeFilter} defaultValue="all">
                <option  value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
                <option value="all">All</option>
            </select>
        </div>
        </div>
        </div>
            <div className="task-list">
            {tasksList.map((taskItem) => {
                const taskArray = [taskItem]
                
                if( priorityFilter ==="all" ){

                return (

                    <li className="task-item" key={taskItem.id}>

                        <p className="task-title">{taskItem.task}</p>
                        
                        <div className="side-task-item">
                          
                            <div className={`task-priority-tag-${taskItem.priority}`}>{taskItem.priority}</div>
                            <div className="delete-task-container">
                            <input
                                    type="checkbox"
                                    id="done"
                                    name="done-task"
                                    className="mark-done"
                                    value={isDone}
                                    onChange={handleChange}
                            />
                            <Boop rotation={15} timing={100}>
                            <img 
                            className="icon-delete-task" 
                            src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png" alt=""
                            onClick={()=> {deleteTask(taskItem.id)}}
                            />
                            </Boop>
                            </div>
                        </div>
                    </li>
                )             
              
            } else {
              var filteredArray = taskArray.filter( taskItem => taskItem.priority.includes(priorityFilter))
               
                if(filteredArray[0] !== undefined){
                return(
                    <li className="task-item" key={filteredArray[0].id}>
                         <p className="task-title">{filteredArray[0].task}</p>
                         <div className="side-task-item">
                          
                            <div className={`task-priority-tag-${filteredArray[0].priority}`}>{filteredArray[0].priority}</div>
                            <div className="delete-task-container">
                            <input
                                    type="checkbox"
                                    id="done"
                                    name="done-task"
                                    className="mark-done"
                                    // value={isDone}
                                    // onChange={handleChange}
                            />
                            <Boop rotation={15} timing={100}>
                            <img 
                            className="icon-delete-task" 
                            src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png" alt=""
                            onClick={()=> {deleteTask(filteredArray[0].id)}}
                            />
                            </Boop>
                            </div>
                        </div>
                    </li>
                )} else return(<></>)
    
            }
               
            })}
               
            </div>
         
        </div>

        </div>

    )
}

export default TasksContainer;