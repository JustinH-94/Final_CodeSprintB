import React, { useEffect, useState } from 'react'
import AddUserName from '../components/addUserName';
import {UserCollection } from '../data/firebase';

function UserName(props) {
    const userID = props.uid;

    const [message, setMessage] =useState("");
    //const [saving, setSaving] = useState(false);

    useEffect(()=>{
        async function getName(){
            try{
                const userNameSnap = await UserCollection.doc(userID).get();
                const data = userNameSnap.data();
                setMessage(`Welcome Back ${data.userName}`);
            }catch(error){console.error(error);}
        }
        getName();
    },[userID]);
    return (
    <div>
        <div>
            <h2 className="user__greeting">{message}</h2>    
            <AddUserName userID={userID}/>
        </div>
    </div>)
   
}

export default UserName;
