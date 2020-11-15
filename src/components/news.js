import React, { useEffect, useState } from 'react'
import {m4gCollection } from '../data/firebase';
import DataPage from './data_page';
import "./dataListing.css"
import Loading from './loading';

function NewsListing() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState("latest");
    const onOrderChange=(event)=>{
        setOrder(event.type.value); 
    }
    useEffect(()=>{
        setData([]);
        setOrder(document.getElementById("order__form").value);
        const onNext=(snapshot)=>{
            setLoading(false);
            const docs = snapshot.docs
            setData(docs);
        }
        const onError=(error)=>{console.error(error)};
        setLoading(true);
        if(order==="latest"){
            const unsubscribe = m4gCollection.orderBy("addition","desc").where("articleType","==", "news").onSnapshot(onNext, onError);
            return unsubscribe;
        }
        if(order==="oldest"){
            const unsubscribe = m4gCollection.orderBy("addition","asc").where("articleType","==", "news").onSnapshot(onNext, onError);//.where("rating", "==",9) Add this before onSnapshot to specific values of fields to be displayed
            return unsubscribe;
        }
        else if(order==="desc"){
            const unsubscribe = m4gCollection.orderBy("rating", "desc").where("articleType","==", "news").onSnapshot(onNext, onError);
            return unsubscribe;
        }
        else if(order==="asc"){
            const unsubscribe = m4gCollection.orderBy("rating", "asc").where("articleType","==", "news").onSnapshot(onNext, onError);
            return unsubscribe;
        }
    },[order]);
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
            
            <div>
                <form>
                    <select id="order__form" className="order__of" type="text" value={order} onChange={onOrderChange}>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
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

export default NewsListing;