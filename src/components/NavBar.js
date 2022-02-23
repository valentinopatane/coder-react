import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
            <NavContainer>
                <nav>
                    <Link to="/" style={{textDecoration:"none"}}><h2>plug.sr</h2></Link>
                    <ul className="aList">
                        <Link to="/shop">Store</Link>
                        <Link to="/archive">Archive</Link>
                        <Link to="/subscribe">Subscribe</Link>
                        <Link to="/about">About</Link>
                    </ul>
                    <Link to="/cart"style={{marginTop: '5px'}} >
                        <CartWidget ></CartWidget>
                    </Link>
                </nav>
            </NavContainer>
        </>
    );
}
export default Navbar;

const NavContainer = styled.nav`
    nav{
        text-decoration:none;
        z-index:1000;
        position:fixed;
        top:0;
        background-color: transparent;
        width:100%;
        height:40px;
        display:flex;
        justify-content:space-around;
        align-items: center;
        font-weight:100;
        border-bottom: 1px solid #808080;
        
            h2{
                font-size: 20px;
                width:40%;
                color:#FFF;
                font-family:'Helvetica Neue' sans-serif,
                
            }
            .aList{
                position:absolute;
                width:40%;
                display:flex;
                align-items:center;
                justify-content: space-evenly;
                    a{
                        color:#FFF;
                        text-decoration:none;
                        font-size:18px;
                    }
                    a:hover{
                        transition: color 0.125s ease-in;
                        color: #808080;
                    }
            }
    }


`
