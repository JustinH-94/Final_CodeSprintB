import React, { useState } from 'react'
import db, { gamesCollection, m4gCollection, moviesCollection, tvCollection } from '../data/firebase';
import SubmissionBox from './submission-box';

function AddForm() {
    const [saving, setSaving] =useState(false);
    const [isSuccessMessage, setISSuccessMessage] =useState("");

    const onFormSubmit = async (title, rating, releaseYr, type, addition) =>{
        setSaving(true);
        setISSuccessMessage("");
        try{
            await m4gCollection.add({
                title,
                rating,
                releaseYr,
                type, 
                addition
            })
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
