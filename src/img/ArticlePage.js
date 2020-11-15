import React from 'react'
import { useParams } from 'react-router-dom';
import ContentPage from '../components/content_page';

function ArticlePage() {
    const {id,data} = useParams();
    console.log("here");
    return (
        <main>
            <ContentPage id={id} data={data}/>
        </main>
    )
}

export default ArticlePage
