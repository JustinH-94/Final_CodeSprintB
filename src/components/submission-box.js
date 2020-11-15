import React, { useState } from 'react'
import db from '../data/firebase';
import "./submission-box.css"
import CKEditor from "ckeditor4-react"

function SubmissionBox(props) {
    const {initialize ={},message, saving, onSubmit } = props;

    if(initialize.title === undefined)initialize.title="";
    if(initialize.rating === undefined)initialize.rating=1;
    if(initialize.releaseYr === undefined)initialize.releaseYr=2020;
    if(initialize.articleText === undefined)initialize.articleText="Please don't add images to this editor";
    if(initialize.type === undefined)initialize.type="Games";
    if(initialize.articleType === undefined)initialize.articleType="review";
    const [title, setTitle] =useState(initialize.title);
    const [rating, setRating] =useState(initialize.rating);
    const [releaseYr, setReleaseYr] = useState(initialize.releaseYr);
    const [type, setType] =useState(initialize.type);
    const [articleText, setArticleText] = useState(initialize.articleText);
    const [articleType, setArticleType] = useState(initialize.articleType)
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

    const onArticleChange=(event)=>{
        setArticleText(event.editor.getData());
        console.log(articleText);
    }

    const onFormSubmit = async(event)=>{
        event.preventDefault();
        const numRating = parseInt(rating, 10);
        const numYr = parseInt(releaseYr, 10);
        //setArticleText(CKEditor.instance["text"].getData());
        console.log(articleText);
        let addition = size;
        let data;
        if(articleType ==="news"){
            data ={
                title,
                type,
                addition:addition+1,
                articleText,
                articleType
            }
        }else{
            data={title,
                rating:numRating,
                releaseYr:numYr,
                type, 
                addition:addition+1,
                articleText,
                articleType}
        }
        
        onSubmit(data);
    }
    return (
        <form onSubmit={onFormSubmit}>
            {message && <p className="form__message">{message}</p>}
            <fieldset className="form__control" disabled={saving}>
                <label className="submission-form_label">Article Type:
                    <select id="article__form" className="select__box_articleType" type="text" value={articleType} onChange={(event)=> setArticleType(event.target.value)}>
                        <option value="review">review</option>
                        <option value="news">news</option>
                    </select>
                </label>
                <label className="submission-form_label"> Type:
                    <select id="entertainment__form" className="select__box" type="text" value={type} onChange={onTypeChange}>
                        <option value="Game">Games</option>
                        <option value="Movie">Movies</option>
                        <option value="TV">TV Shows</option>
                    </select>
                </label>
                <br/>
                
                {articleType ==="review"?(
                    <>
                        <label className="submission-form_label">Rating:</label>
                        <input className="form__input_num" type="number" value={rating} min="1" max="10" onChange={onRatingChange}/>
                        <label className="submission-form_label">Release Date:</label>
                        <input className="form__input_num" type="number" value={releaseYr} min="1900" max="2020" onChange={onReleaseYrChange}/>
                    </>
                ):(<p></p>)}
                <label className="submission-form_label">Title:</label>
                <input className="form__input_text" type="text" value={title} onChange={onTitleChange}/>
                <CKEditor name="textEditor" type="classic" data={articleText} value={articleText} onChange={onArticleChange}/>
                <input className="form__submit" type="submit" value={saving ? "Saving...": "Save"}/>
            </fieldset>
            
        </form>
    )
}

// class Editor extends Component{
//     constructor(props){
//         super(props);

//         this.state={
//             data:`<p>I've been waiting for this</p>`
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.onEditorChange = this.onEditorChange.bind(this);
//     }

//     onEditorChange(evt){
//         this.setState({
//             data: evt.editor.getData()
//         });
//     }

//     handleChange(changeEvent){
//         this.setState({
//             data: changeEvent.target.value
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <CKEditor 
//                 data={this.state.data}
//                 onChange={this.onEditorChange}
//                 />
//                 <label>
//                     Change value:
//                     <textarea defaultValue={this.state.data} onChange={this.handleChange}/>
//                 </label>
//             </div>
//         )
//     }
// }
export default SubmissionBox
