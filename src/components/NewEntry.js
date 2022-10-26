import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, auth } from "../Firebase";
import { getDocs } from "firebase/firestore";

const NewEntry = () =>{

    const [entryTitle, setEntryTitle] = useState("");
    const [entryText, setEntryText] = useState("");


const  EntryCollectionRef = collection(db, "entry");


const createNewEntry = async () =>{
    if(entryText.trim().length > 0){
      await addDoc(EntryCollectionRef,{
          date: dateBuilder(new Date()),
          title: entryTitle, 
          text: entryText, 
          id: auth.currentUser.uid,
          createdAt: serverTimestamp(),
            })
        }
        setEntryText('')
        setEntryTitle('')
    }

    useEffect(()=> {
        const getEntry = async() =>{

            const data = await getDocs(EntryCollectionRef)
            // console.log(data)
            if(data.docs[0]=== undefined){
                return
            }
        }

        getEntry();
    }, [])


    const dateBuilder =(d)=>{
        let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return ` ${month}  ${date}, ${year}`
      }
  
    return(
        <div className="new-entry">
            <div className="date">{dateBuilder(new Date())}</div>
            
            <div className="input-container">
            <input
                className="entry-title"
                placeholder="Title..."
                maxLength={90}
                required
                value={entryTitle}
                onChange={(event) => { setEntryTitle(event.target.value)}}
            >

            </input>
            <textarea
                className="entry-text"
                placeholder="Write here..."
                value={entryText}
                onChange={(event) => { setEntryText(event.target.value)}}
            >

            </textarea>
                <button className="save-entry-btn" onClick={createNewEntry}>Save</button>
            </div>
        </div>
    )
}

export default NewEntry;