import {useContext} from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ItemsContext } from './context/ItemsContext'


function CartWidget(){
    const { cartNumber, hasProduct} = useContext(ItemsContext);
    return(
        <>  {hasProduct 
            ?   <div className="carting">
                    <FontAwesomeIcon class="cart_icon"icon={faShoppingCart} />
                </div>
            :   <div className="carting">
                    <span>( {cartNumber} )</span> <FontAwesomeIcon class="cart_icon"icon={faShoppingCart} />
                </div>
            }
            
            
        </>
    )
}


export default CartWidget;

