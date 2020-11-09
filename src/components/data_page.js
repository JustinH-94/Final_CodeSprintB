import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function DataPage(props) {
    const {id, data} = props;
    const {title, releaseYr, rating, type} = data;
    
    const rateQuanitfier = "🌟".repeat(rating)+"⭐".repeat(10-rating);
    const history = useHistory();
    const [errorMessage, setErrorMessage] =useState("");
    return (
        <div>
            <button className="data__button" data={data} onClick={()=> history.push(`/${type}/${id}`)}>
                <div>
                    <div className="display__title">{title}</div>
                    <div className="display__rating">{rateQuanitfier}</div>
                    <div className="display__release">{releaseYr}</div>
                </div>
            </button>

        </div>
    )
}

export default DataPage
