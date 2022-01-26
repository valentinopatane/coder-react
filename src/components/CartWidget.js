import React from "react";
import styled from "styled-components";

function Cart(){
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

export default Cart;

