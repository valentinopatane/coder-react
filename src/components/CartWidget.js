import React from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget(){
    return(
        <>
            <FontAwesomeIcon class="cart_icon"icon={faShoppingCart} />
        </>
    )
}


export default CartWidget;

