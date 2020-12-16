import React, { useState } from 'react'
import { useEffect } from 'react';
import { m4gCollection, UserCollection } from '../data/firebase';
import Loading from './loading';
import SubmissionBox from './submission-box';

function EditDoc(props) {
    const{id, user}=props;
    const userID = user.uid;
    const [loading, setLoading] =useState(false);
    const [docData, setDocData] = useState(null);
    const [saving, isSaving] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const isEdit =true;
    
    useEffect(() => {
        async function getData(){
            setLoading(true);
            try{
                const docSnapshot = await UserCollection.doc(userID).collection("M4GCollection").doc(id).get(); 
                if(!docSnapshot.exists){
                    throw new Error("This item does not exist")
                }
                const data = docSnapshot.data();
                setDocData(data);
            }
            catch(error){
                console.error(error);
            }
            setLoading(false);
        }
        getData();
    }, [id, userID])
    const EditSubmit=async(data)=>{
        isSaving(true);
        try{
            await m4gCollection.doc(id).set(data);
            await UserCollection.doc(userID).collection("M4GCollection").doc(id).set(data);
            setSuccessMessage("Successfully edited the document!");
        }catch(error){
            console.error(error);
        }
        isSaving(false);
    }
    return (
        <div>
            <h1>Edit</h1>
            {loading && (
                <Loading
                size="10px"
                color="green"
                backgroundColor="rgb(255, 255, 255, 0.2)"/>
                )}
            {docData && <SubmissionBox
            
            initialize={docData}
            onSubmit={EditSubmit}
            saving={saving}
            message={successMessage}
            edit={isEdit}/>}
        </div>
    )
}

export default EditDoc
