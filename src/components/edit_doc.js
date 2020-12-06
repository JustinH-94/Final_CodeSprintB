import React, { useState } from 'react'
import { useEffect } from 'react';
import { m4gCollection } from '../data/firebase';
import Loading from './loading';
import SubmissionBox from './submission-box';

function EditDoc(props) {
    const{id}=props;
    let docType
    const [loading, setLoading] =useState(false);
    const [docData, setDocData] = useState(null);
    const [saving, isSaving] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    
    useEffect(() => {
        async function getData(){
            setLoading(true);
            try{
                const docSnapshot = await m4gCollection.doc(id).get();
                if(!docSnapshot.exists){
                    throw new Error("This item does not exist")
                }
                const data = docSnapshot.data();
                const {type}=data;
                docType =type;
                setDocData(data);
            }
            catch(error){
                console.error(error);
            }
            setLoading(false);
        }
        getData();
    }, [id])
    const EditSubmit=async(title,releaseYr,type,articleText,articleType,rating)=>{
        isSaving(true);
        try{
            if(articleType === "news"){
                await m4gCollection.doc(id).set({
                    title,
                    releaseYr,
                    type,
                    articleText,
                    articleType,
                })
            }
            else{
                await m4gCollection.doc(id).set({
                    title,
                    releaseYr,
                    type,
                    articleText,
                    articleType,
                    rating
                })
            }
            setSuccessMessage("Successfully edited the document!");
        }catch(error){
            console.error(error);
        }
        isSaving(false);
    }
    return (
        <div>
            <h1>Edit {docType}</h1>
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
            message={successMessage}/>}
        </div>
    )
}

export default EditDoc
