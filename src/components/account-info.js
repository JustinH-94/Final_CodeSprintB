import { auth } from 'firebase';
import React, { useState } from 'react'
import { provider } from '../data/firebase';
import UserName from '../hooks/use-userName';
import "./userNameSub.css";
function AccountInfo(props) {
    
    const {user}=props;
    //console.log(props.user.uid);
    const [isLoading, setIsLoading] = useState(false);
    //const [userName] = UserName();
    const signIn = async () => {
        setIsLoading(true);
        try{
            await auth().signInWithPopup(provider);
        }catch(error){
            console.error(error);
        }
        setIsLoading(false);
    };

    const signOut = async () => {
        setIsLoading(true);
        try{
            await auth().signOut();
        }catch(error){console.log(error); }
        setIsLoading(false);
    }

    let contents;
    let userID;
    if(user){
        const {uid} = user;
        userID = uid;
        contents = (
            <>
                    <button className="login-form__button" onClick={signOut} disabled={isLoading}>
                        {isLoading ? "Signing Out ..." : "Sign Out"}
                    </button>     
            </>
        )
    }
    else{
        contents = (
            <>
                <p> Please Login or create a new account by linking your Google account to get access to the app.</p>
                    <button className="login-form__button" onClick={signIn} disabled={isLoading}>
                        {isLoading ? "Logging In ..." : "Log In"}
                    </button>
            </>
        )
    }
    return (
        <div>
            <div>
                <div>
                    <UserName uid={userID}/> 
                </div>
                <div className="signOut__signIn">
                    {contents}
                </div>
            </div>
        </div>
    );
}

export default AccountInfo;