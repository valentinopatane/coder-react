// import React from "react";
// import styled from "styled-components";
// import CartWidget from "./CartWidget";

// import {Link} from "react-router-dom";

// function Navbar(){
//     return(
//         <>
//             <NavContainer>
//                 <nav>
//                     <Link to="../views/home" style={{textDecoration:"none"}}><h2>plug.sr</h2></Link>
//                     <ul className="aList">
//                         <Link to="../views/Shop.js">Store</Link>
//                         <Link to="../views/Shop.js">Archive</Link>
//                         <Link to="../views/Shop.js">Subscribe</Link>
//                         <Link to="../views/Shop.js">About</Link>
//                     </ul>
//                     <CartWidget></CartWidget>
//                 </nav>
//             </NavContainer>
//         </>
//     )
// }
// export default Navbar;

// const NavContainer = styled.nav`
//     nav{
//         text-decoration:none;
//         z-index:1000;
//         position:fixed;
//         top:0;
//         background-color: transparent;
//         width:100%;
//         height:40px;
//         display:flex;
//         justify-content:space-around;
//         align-items: center;
//         font-weight:100;
//         border-bottom: 1px solid #808080;
        
//             h2{
//                 font-size: 20px;
//                 width:40%;
//                 color:#FFF;
//                 font-family:'Helvetica Neue' sans-serif,
                
//             }
//             .aList{
//                 position:absolute;
//                 width:40%;
//                 display:flex;
//                 align-items:center;
//                 justify-content: space-evenly;
//                     a{
//                         color:#FFF;
//                         text-decoration:none;
//                         font-size:18px;
//                     }
//                     a:hover{
//                         transition: color 0.125s ease-in;
//                         color: #808080;
//                     }
//             }
//     }


// `

import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";

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
                    <CartWidget></CartWidget>
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