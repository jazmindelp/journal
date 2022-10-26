import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase";
import Boop from "../animations/DeleteIcon";
const Notes = () =>{

    const[savedNotes, setSavedNotes] = useState([]);
    const [updateNotes, setUpdateNotes] = useState(false);
    
    const [emptyNotePage, setEmptyNotePage] = useState(false);

    const  NotesCollectionRef = collection(db, "notes");
    const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));

    useEffect(() => {
        const getNotes = async() =>{
            const data = await getDocs(q);
            if(data.docs.length === 0){
                setEmptyNotePage(true)

            }
         
            setSavedNotes( data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
       
            getNotes()
        }, [updateNotes])
    let navigate = useNavigate();

    const deleteNote = async(id) =>{
        const notesDoc = doc(db, "notes", id)
        await deleteDoc(notesDoc)
        setUpdateNotes(!updateNotes)
 
        if(savedNotes.length === 1){
            setEmptyNotePage(true)
        }
    }


    if(emptyNotePage === true){
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
            <div className="empty-list-container">
            <div className="empty-entry-list">
                Nothing to see here yet! Go back and write a note first
            </div>
            </div>
    </>
        )}
        else{
    return(
        <div className="notes">
            <div className="go-back" onClick={ () => navigate('/home')}>
                
                <p className="go-back-text">Go back</p>  
                <img 
                    className="go-back-page-icon"
                    src="https://static.thenounproject.com/png/2961062-200.png" alt=""/>
            </div>
            <div className="notes-list-container">
        <div className="notes-list">

            {savedNotes.map((note) => {
                return(
                    <div className="note-item" key={note.id}>
                        <div className="note-item-text">{note.stickyText}</div>
                        <div className="delete-btn-container">
                        <Boop rotation={15} timing={100} >
                      <img 
                            className="icon-delete-note" 
                            src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png" alt=""
                            onClick={()=> {deleteNote(note.id)}}
                            />

                    </Boop>
                    </div>
                    </div>
                )
            })}



        </div>

        </div>


        </div>
    )
}}

export default Notes;