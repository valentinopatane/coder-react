import React,{ createContext, useState} from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({children})=>{
    const [products,setProducts] = useState([]);

    function isInCart(itemID){
        return products.some((product)=> product.id === itemID)
    }

    //addItem recibe como propiedad al item y a la cantidad desde ItemDetail
    const addItem = (item, quantityToAdd) =>{
            if(isInCart(item.id)){
                //Si isInCart encuentra a través de array.some un producto foundItem compara ese producto añadido y el nuevo que ingresa
                const foundProduct = products.find((product)=> product.id === item.id);
                //El producto encontrado en foundItem, se le añade la quantity llamando a su propiedad quantity
                foundProduct.quantity =  foundProduct.quantity + quantityToAdd;
            }
            else{products.push({...item, quantity: quantityToAdd })
            }
            console.log(products);
            setProducts([...products]);
    };

    const deleteItem = (productID)=>{
        const updatedProducts = products.filter((product) =>
        product.id !== productID)
        setProducts([...updatedProducts]);
        console.log(products)
    }

    const clearCart =()=>{
        setProducts([]);
    }

    return(
        <ItemsContext.Provider value={{ products, addItem, deleteItem,clearCart }}>
            {children}
        </ItemsContext.Provider>
    );
}
