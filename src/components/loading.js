
import React from 'react'
import "./loading.css"
function Loading(props){
    const{
        size="1rem",
        color="#44ff1f",
        backgroundColor = "#202020",
    }=props;
    const loaderStyle={
        width:size,
        height: size,
        borderColor: backgroundColor,
        borderLeftColor: color,
    }
    return (
        <div className="loader" style={loaderStyle}>
            Loading...
        </div>
    )
}

export default Loading
