//import { Tv } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import {m4gCollection } from '../data/firebase';
import DataPage from './data_page';
import "./dataListing.css"

function DataListing() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState("latest");

    const onOrderChange=(event)=>{
        setOrder(event.type.value);
    }

    useEffect(()=>{
            setLoading(true);
        const onNext=(snapshot)=>{
            const docs = snapshot.docs
            setData(docs);
        }
        const onError=(error)=>{console.error("error!")};
        console.log(order);
        if(order === "latest"){
            const unsubscribe = m4gCollection.orderBy("addition","desc").onSnapshot(onNext, onError);
            return unsubscribe;
        }
        else{
            const unsubscribe = m4gCollection.orderBy("rating", `${order}`).onSnapshot(onNext, onError);
            return unsubscribe;
        }
    },[]);
    return (
        <div>
            <div>
                <form>
                    <select id="order__form" className="order__of" type="text" value={order} onChange={onOrderChange}>
                        <option value="latest">Latest</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </form>
            </div>
            <ul>
               {data.map((dataInfo)=>{
                    const id = dataInfo.id;
                    const content = dataInfo.data();

                    return <li key={id}><DataPage id={id} data ={content}/></li>
                })} 
            </ul>
        </div>
    )
}


export default DataListing
