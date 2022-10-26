import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from "../Firebase";
import { getDocs } from "firebase/firestore";


const StickyNote = () =>{

const [stickyText, setStickyText] = useState('');


const characterLimit = 250;

const handleChange = (event) =>{
    if(characterLimit - event.target.value.length >= 0){
        setStickyText(event.target.value)
    };
}

const  stickyCollectionRef = collection(db, "notes");

const handleSave = async () =>{
    if(stickyText.trim().length > 0){
      await addDoc(stickyCollectionRef,{ stickyText, createdAt: serverTimestamp()})
        setStickyText('')
    }
}

useEffect(() => {
 const getStickyNote = async() =>{
    const data = await getDocs(stickyCollectionRef)
   if(data.docs[0]=== undefined){
       return
   }}
    getStickyNote()
}, [])



    return(
        <div className="sticky-note">
            <div className="sticky-note-container">
                <img  className="pinned-icon"src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/pin-icon.png" alt=""/>
                <textarea 
                        maxLength={200}
                        rows={6}
                        
                        className="input-sticky-note" 
                        placeholder="Write a note"
                        onChange={handleChange}
                        value={stickyText} >
                </textarea>
                
            </div>
                <button className="save-sticky-btn" onClick={handleSave}>Save</button>
            </div>
    )
}

export default StickyNote;