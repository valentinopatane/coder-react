import React from "react";
import styled from "styled-components";
import Cart from "./CartWidget";

function Navbar(){
    return(
        <>
            <NavContainer>
                <nav>
                    <h2>MyShop</h2>
                    <div className="aList">
                        <a href="/">Home</a>
                        <a href="/">News</a>
                        <a href="/">Products</a>
                        <a href="/">About</a>
                    </div>
                    <Cart></Cart>
                </nav>
            </NavContainer>
        </>
    )
}
export default Navbar;

const NavContainer = styled.nav`
    nav{
        background-color: #000;
        width:100%;
        height:70px;
        display:flex;
        justify-content:space-around;
        align-items: center;
        font-weight:100;
            h2{
                font-size: 20px;
                width:40%;
                color:#FFF;
                font-family:'Helvetica Neue' sans-serif,
            }
            .aList{
                width:40%;
                display:flex;
                justify-content: space-evenly;
                    a{
                        color:#FFF;
                        text-decoration:none;
                    }
                    a:hover{
                        color:#5aa0ff;
                    }
            }
    }


`