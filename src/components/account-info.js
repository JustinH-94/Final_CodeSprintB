import { auth } from 'firebase';
import React, { useState } from 'react'
import { provider } from '../data/firebase';

function AccountInfo(props) {
    console.log("Hello");
    const {user}=props;
    const [isLoading, setIsLoading] = useState(false);

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
    if(user){
        const {displayName} = user;
        contents = (
            <>
                <p>Welcome Back {displayName}!</p>
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
            <h1>Account Info</h1>
            <div>
                <h2>Social Login</h2>
                    {contents}
            </div>
        </div>
    );
}

export default AccountInfo;