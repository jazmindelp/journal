import { useEffect, useState } from "react";
import { deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { collection } from 'firebase/firestore'
import { db } from "../Firebase";
import Boop from "../animations/DeleteIcon";
import { useNavigate } from "react-router-dom";

const Entries = () => {

    let navigate = useNavigate();
    const [entryList, setEntryList] = useState([]);

    const [updateEntries, setUpdateEntries] = useState(false)

    const [emptyList, setEmptyList] = useState(false)

    const  EntryCollectionRef = collection(db, "entry")
    const q = query(collection(db, "entry"), orderBy("createdAt", "desc"));

   
    useEffect(() => {
        const getEntries = async() =>{
            const data = await getDocs(q);
            if(data.docs.length === 0){
                setEmptyList(true)
            }
            setEntryList( data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(entryList)
        }
       
            getEntries()
        }, [updateEntries])


        const deleteEntry = async(id) =>{
            const entryDoc = doc(db, "entry", id)
            await deleteDoc(entryDoc)
            setUpdateEntries(!updateEntries)
            setShowEntry(false)
            if(entryList.length === 1){
                setEmptyList(true)
            }
        }
        
        const [showEntry, setShowEntry] = useState(false);
        const [selectEntry, setSelectEntry] = useState({})
       
       
      
        if(emptyList === true){
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
                    Nothing to see here yet! Go back and write an entry first
                </div>
                </div>
        </>
            )}
            else{
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
        <div className="entries-page">
            
        
            <div className="entry-list">


                {entryList.map((entry) => {
                     const handleSelect = (e) =>{
                        setShowEntry(true)
                        setSelectEntry(entry)
                        console.log(selectEntry)
                    }
                    return(
                        <div className="entry-list-item" key={entry.id} onClick={handleSelect}>
                    <p className="list-item-date">{entry.date}</p>
                    <div className="entry-row">
                    <p className="list-item-title">{entry.title}</p>
                   <div className="delete-entry-container">
                   <Boop rotation={15} timing={100}>
                      <img 
                            className="icon-delete" 
                            src="https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-64-512.png" alt=""
                            onClick={()=> {deleteEntry(entry.id)}}
                            />

                    </Boop>
                    </div>
                    </div> 
                </div>

                    )
                })}
                
                
              
             
            </div>
                {showEntry ? 
                
                
            <div className="selected-entry-container">
            <div className="selected-entry">
                <div className="input-container">
                <div className="entry-title">{selectEntry.title}</div>
                <div className="entry-text">{selectEntry.text}</div>
                </div>
                </div>
            </div> 
            
            
                : <div className="selected-entry-container"></div> }
            
       
        </div>
 
</>  
    )
}
}
export default Entries;