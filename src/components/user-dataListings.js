import React from 'react'
import UseAllData from '../hooks/use-allData';
import DataPage from './data_page';
import Loading from './loading';

function UserDataListings(props) {
    const userID = props.user.uid;
    const isLogged = true;
    const [data, loading] = UseAllData(userID);
    return (
        <div>
            <div className="loading__place">
                {loading && (
                <Loading
                size="10px"
                color="green"
                backgroundColor="rgb(255, 255, 255, 0.2)"/>
                )}
            </div>
            <ul>
               {data.map((dataInfo)=>{
                    const id = dataInfo.id;
                    const content = dataInfo.data();

                    return <li key={id}><DataPage id={id} data ={content} isLogged={isLogged} userID={userID}/></li>
                })} 
            </ul>
        </div>
    )
}

export default UserDataListings
