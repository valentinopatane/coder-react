// import React from "react";
// import "./style.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// function CartWidget(){
//     return(
//         <>
//             <FontAwesomeIcon class="cart_icon"icon={faShoppingCart} />
//         </>
//     )
// }


// export default CartWidget;



import React from "react";
import styled from "styled-components";

function CartWidget(){
    return(
        <>
            <CartLogo>
                <div>
                    <img className="cartImg" src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-11.jpg"></img>
                </div>
            </CartLogo>

        </>
    )
}

const CartLogo = styled.div`
    .cartImg{
        width:45px;
        cursor:pointer;
    }
`

export default CartWidget;


