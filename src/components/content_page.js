import React from 'react'

function ContentPage(props) {
    const data = props;
    const {title, rating, releaseYr,} = data;
    console.log(title);
    return (
        <div>
            <div>
                stuff goes here
            </div>
        </div>
    )
}

export default ContentPage
