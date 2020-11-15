
import React from 'react'
import { useLocation } from 'react-router-dom';
import "./content_page.css"
function ContentPage(props) {
    let data;
    const loc = useLocation();
    if(loc.state && loc.state.data){
        data =loc.state.data;
    }
    const {title, rating, articleText} = data;
    return (
        <div>
            <h1 className="title__edit">{title}</h1>
            <div className="article__text">{removeHtml(articleText)}</div>
            <div className="rating__edit" >
                <div className="rating__num">{rating}</div>
            </div>
        </div>
    )
}

function removeHtml(text){
    let tmp = new DOMParser().parseFromString(text,`text/html`);
    tmp.innerHTML = text;
    return tmp.body.textContent||"";
}
export default ContentPage
