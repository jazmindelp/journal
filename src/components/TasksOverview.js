// import { addDoc, collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { db } from "../Firebase";


// const TasksOverview = ({setDoneTasks, doneTasks}) =>{

//     const [updateNumber, setUpdateNumber] = useState(false)


//     const DoneTasksRef = collection(db, "doneTasks")
//     const q = query(collection(db, "doneTasks"), orderBy("createdAt", "desc"));

//     useEffect(() =>{
//         const saveDoneTasks = async () =>{
//             await addDoc(DoneTasksRef, {number: doneTasks, createdAt: serverTimestamp()})
//             const data = await getDocs(q);

//             if(data.docs[0]._document.data.value.mapValue.fields.number.integerValue === undefined){
//                 setDoneTasks(0)
//             } else{
//                 setUpdateNumber(!updateNumber)
//                 setDoneTasks(data.docs[0]._document.data.value.mapValue.fields.number.integerValue)
//             }
           
//         }
//             saveDoneTasks()
//     }, [updateNumber])

//     return(
//         <div className="tasks-overview">
//             <p>Tasks overview</p>
//             <div className="tasks-overview-container">
//                 <div className="task-overview-item">
//                     <h1>124</h1>
//                     New tasks
//                 </div>
//                 <div className="task-overview-item">
//                     <h1>124</h1>
//                     Ongoing tasks
//                 </div>
//                 <div className="task-overview-item">
//                     <h1>{doneTasks}</h1>
//                     Done tasks
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TasksOverview;