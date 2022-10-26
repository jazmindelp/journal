import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { db } from "../Firebase";

const CreateTask = ({setShowCreateTask, pickDate}) =>{

    const [task, setTask] = useState("");

    const [priority, setPriority] = useState("");

    const TaskCollectionRef = collection(db, 'tasks')
  

    const createNewTask = async () =>{
        if(task.trim().length > 0){
            await addDoc(TaskCollectionRef,{task, priority: priority, createdAt: pickDate })
        }
        
        setTask('')
        setShowCreateTask(false)
    }

    useEffect(()=> {
        const getTask = async() =>{
            const data = await getDocs(TaskCollectionRef)
          
            if(data.docs[0]=== undefined){
                return
            }

            
        }
        getTask();
    }, [])
    
    return(
        <div className="create-task">
                    <div className="top-create-task">
                        <h2>Create task</h2>
                        <img 
                            className="close-create-task"
                            onClick={() => setShowCreateTask(false)}
                            src="https://freepikpsd.com/file/2019/10/close-button-png-icon-6-Transparent-Images-Free.png"
                            alt=""/>
                    </div>
                    <div className="task-input-container">
                        <input 
                            className="task-input" 
                            maxLength={120}
                            value={task}
                            onChange={(event) => { setTask(event.target.value)}}>
                        </input>
                        <h2>Priority</h2>


                        <div className="priority-selection" onChange={(event) => { setPriority(document.querySelector('input[name="priority"]:checked')?.value)}}>
                            <div className="checkbox-priority" >
                            <input type="radio" id="high" name="priority" value="high" />
                            <label htmlFor="high">High</label>
                            </div>
                            <div className="checkbox-priority">
                            <input  type="radio" id="medium" name="priority" value="medium"/>
                            <label htmlFor="medium">Medium</label>
                            </div>
                            <div className="checkbox-priority" >
                            <input type="radio" id="low" name="priority" value="low"/>
                            <label htmlFor="low">Low</label>
                            </div>
                        </div>

                    </div>
                    <button className="save-task-btn" onClick={()=> createNewTask()}>Save</button>
                </div>
    )
}

export default CreateTask;