import React from 'react'
import { Link } from 'react-router-dom'
import Plus from "../img/Plus.png";
import "./nav.css"

function Nav() {
    return (
        <nav>
            <Link  className="add_link" to="/add" style={{textDecoration:'none'}}>
                <img alt="" src={Plus}/>
            </Link>
            <Link className="logo" to="/" style={{textDecoration:'none'}}>RNG</Link>
            <Link className="login" to="/" style={{textDecoration:'none'}}>Login</Link>
            <div><Link className="review_link" to="/review">Review</Link><Link className="news_link" to="/news">News</Link>Games</div>
        </nav>
    )
}

export default Nav;
