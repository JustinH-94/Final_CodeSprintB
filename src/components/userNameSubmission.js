import React, { useState } from 'react'
import "./userNameSub.css";
function UserNameSubmission(props) {
    const {initialize ={}, message, saving, onSubmit} = props;
    if(initialize.UserName === undefined)initialize.UserName="";
    const [userName, setUserName] = useState(initialize.UserName);

    const onUserNameChange=(event)=>{
        setUserName(event.target.value);
    }

    const onUserNameSub =async (event) =>{
        event.preventDefault();
        let data= userName;
        console.log(data);
        onSubmit(data);
    }
    return (
        <form onSubmit={onUserNameSub}>
            {message && <p className="form_message">{message}</p>}
            <fieldset>
            <h3 className="username__prompt">User Name Submission:</h3>
                <label>Set UserName:</label>
                <input className="form__input_name" type="text" value={userName} onChange={onUserNameChange}/>
                <input className="form__submit" type="submit" value={saving ? "Saving..." : "Save"}></input>
            </fieldset>
        </form>
    )
}

export default UserNameSubmission
