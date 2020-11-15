import { Delete, Edit } from '@material-ui/icons';
import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom';
import "./data_page.css";
import {m4gCollection} from "../data/firebase"
function DataPage(props) {
    const {id, data} = props;
    const {title, rating, type} = data;
    const history = useHistory();
    const rateQuanitfier = "🌟".repeat(rating)+"⭐".repeat(10-rating);
    const [isDelete, setIsDelete] = useState(false);

    const deleteDoc=async()=>{
        setIsDelete(true);
        try{
            const docRef = m4gCollection.doc(id);
            await docRef.delete();
        }catch(error){console.error(error);}
        setIsDelete(false);
    }
    return (
        <div>
            <Link className="button__link" to={{
                        pathname: `/${type}/${id}`,
                        state:{data:data}
                    }}>
                <button className="data__button" >
                    
                        <div>
                            <p className="display__rating">{rateQuanitfier}</p>
                            <p className="display__title">{title}</p>
                        </div>
                    
                </button>
            </Link>
            <button className="edit__doc" onClick={()=>history.push(`edit/${type}/${id}`)}><Edit/></button>
            <button className="delete__doc" disabled={isDelete} onClick={deleteDoc} ><Delete/></button>          
        </div>
    )
}

export default DataPage
