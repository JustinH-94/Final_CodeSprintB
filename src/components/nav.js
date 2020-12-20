import React from 'react'
import { Link } from 'react-router-dom'
import Plus from "../img/Plus.png";
import "./nav.css"

function Nav(props) {
    //const uid = props.user.uid;
    return (
        <nav>
            <Link  className="add_link" to="/add" style={{textDecoration:'none'}}>
                <img alt="" src={Plus}/>
            </Link>
            <Link className="logo" to="/" style={{textDecoration:'none'}}>RNG</Link>
            <Link className="userList" to="/userdatalist" style={{textDecoration:'none'}}>Your List</Link>
            <Link className="login" to="/account" style={{textDecoration:'none'}}>Account</Link>

            <div><Link className="review_link" to="/review">Review</Link><Link className="news_link" to="/news">News</Link>Games</div>
        </nav>
    )
}

export default Nav;
