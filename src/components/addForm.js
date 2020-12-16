import React, { useState } from 'react'
import  {m4gCollection, UserCollection} from '../data/firebase';
import SubmissionBox from './submission-box';
function AddForm(props) {
    const userID = props.user.uid;
    const [saving, setSaving] =useState(false);
    const [isSuccessMessage, setISSuccessMessage] =useState("");

    const onFormSubmit = async (data) =>{
        setSaving(true);
        setISSuccessMessage("");
        try{
            await m4gCollection.add(data)
            await UserCollection.doc(userID).collection("M4GCollection").add(data);
            setISSuccessMessage("Successfully Saved The Submission!");
            console.log("Saved");
        }
        catch(error){
            setISSuccessMessage("There was an error in adding the submission. Please Try Again.");
            console.log("error occured");
        }
        setSaving(false);
    }
    return (
        <div>
            <h1>Add New Article</h1>
            <SubmissionBox onSubmit={onFormSubmit} saving={saving} message={isSuccessMessage}/>
        </div>
    )
}

export default AddForm
