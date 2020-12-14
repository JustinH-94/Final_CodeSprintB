import React, { useEffect, useState } from 'react'
import AddUserName from '../components/addUserName';
import SubmissionBox from '../components/submission-box';
import { m4gCollection, UserCollection } from '../data/firebase';

function UserName(props) {
    const userID = props.uid;
    let userName = "";

    const [message, setMessage] =useState("");
    //const [saving, setSaving] = useState(false);
    let contents;

    useEffect(()=>{
        async function getName(){
            try{
                const userNameSnap = await UserCollection.doc(userID).get();
                const data = userNameSnap.data();
                userName = data.userName;
                setMessage(`Welcome Back ${data.userName}`);
            }catch(error){console.error(error);}
        }
        getName();
    },[userID]);
    return (
    <div>
        <div>
            <h2>{message}</h2>    
            <AddUserName/>
        </div>
    </div>)
   
}

export default UserName;
