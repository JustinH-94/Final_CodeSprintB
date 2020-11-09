import React, { useState } from 'react'
import db, { m4gCollection } from '../data/firebase';
import "./submission-box.css"
import CKEditor from "ckeditor4-react"

function SubmissionBox(props) {
    const {initialize ={},message, saving, onSubmit } = props;

    if(initialize.title === undefined)initialize.title="";
    if(initialize.rating === undefined)initialize.rating=1;
    if(initialize.releaseYr === undefined)initialize.releaseYr=2020;

    const [title, setTitle] =useState(initialize.title);
    const [rating, setRating] =useState(initialize.rating);
    const [releaseYr, setReleaseYr] = useState(initialize.releaseYr);
    const [type, setType] =useState(initialize.type);

    const [errorMessage, setErrorMessage] =useState("");
    let size;
    db.collection("M4G").get().then(snap=>{size = snap.size});

    const onTitleChange = (event) =>{
        setTitle(event.target.value);
    };

    const onRatingChange=(event)=>{
        setRating(event.target.value);
    };

    const onReleaseYrChange=(event)=>{
        setReleaseYr(event.target.value);
    }

    const onTypeChange=(event)=>{
        setType(event.target.value);
    }

    const onFormSubmit = async(event)=>{
        event.preventDefault();
        let addition = size;
        onSubmit(title, rating, releaseYr, type, addition+1);
    }
    return (
        <form onSubmit={onFormSubmit}>
            {message && <p className="form__message">{message}</p>}
            <fieldset className="form__control" disabled={saving}>
                <label className="submission-form_label"> Type:
                    <select id="entertainment__form" className="select__box" type="text" value={type} onChange={onTypeChange}>
                        <option value="Game">Games</option>
                        <option value="Movie">Movies</option>
                        <option value="TV">TV Shows</option>
                    </select>
                </label>
                
                <label className="submission-form_label">Title:</label>
                <input className="form__input" type="text" value={title} onChange={onTitleChange}/>
                <label className="submission-form_label">Rating:</label>
                <input className="form__input" type="number" value={rating} min="1" max="10" onChange={onRatingChange}/>
                <label className="submission-form_label">Release Date:</label>
                <input className="form__input" type="number" value={releaseYr} min="1900" max="2020" onChange={onReleaseYrChange}/>

                <CKEditor className="textbox" type="text"/>
                <input className="form__submit" type="submit" value={saving ? "Saving...": "Save"}/>
            </fieldset>
            
        </form>
    )
}
export default SubmissionBox
