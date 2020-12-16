import React, { useState } from 'react'
import { UserCollection } from '../data/firebase';
import UserNameSubmission from './userNameSubmission';

function AddUserName(props) {
    const userID = props.userID;
    const [saving, setSaving] =useState(false);
    const [message, setMessage] =useState("");
    const onUserNameSub = async (data) =>{
        setSaving(true);
        setMessage("");
        try{
            if(userID === null){
                await UserCollection.doc(userID).add(data);
                setMessage("Successfully Saved The Submission!");
            }
            else{
                await UserCollection.doc(userID).set(data);
                setMessage("Successfully Saved The Submission!");
            }
        }catch(error){
            setMessage("There was an error in adding the submission. Please Try Again.");
            console.error(error);
        }
        setSaving(false);
    }
        return (
        <div>
            <h3>User Name Submission:</h3>
            <UserNameSubmission onSubmit={onUserNameSub} sainvg={saving} message={message} />
        </div>
    )
}

export default AddUserName
