import { useContext } from "react";
import { ItemsContext } from '../components/context/ItemsContext'
import Item from '../components/Item'
    

const Cart =()=>{

    const { products, deleteItem,clearCart } = useContext(ItemsContext);


    

    return(
        <>

            <h1 style={{color:'#fff', marginTop:'150px',textAlign:'center'}}>Acá va el cart</h1>
            <button onClick={()=>clearCart()}>Limpiar carrito</button>

            <div>
            {products.map((product)=>{
                return (
                    <div key={product.id}>
                        <Item item={product}></Item>
                        <button onClick={()=>deleteItem(product.id)}>X</button>
                    </div>
                )
            })}
            </div>
        
        </>
    )
}


export default Cart