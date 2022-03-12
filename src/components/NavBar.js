import React from "react";
import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
import './style.css'

function Navbar(){
    return(
        <>
            <nav>
                <Link to="/" style={{textDecoration:"none"}}><h2>plug.sr</h2></Link>
                <ul className="aList">
                    <Link to="/shop">Store</Link>
                    <Link to="/archive">Archive</Link>
                    <Link to="/about">About</Link>
                </ul>
                <Link to="/cart"style={{marginTop: '5px',textDecoration:'none'}} >
                    <CartWidget ></CartWidget>
                </Link>
            </nav>
        </>
    );
}
export default Navbar;
