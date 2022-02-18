import React,{ createContext, useState} from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({children})=>{
    const [items, setItems] = useState([        
        {id:'1', name:'Laptop', quantity:'2' },
        {id:'2', name:'Phone', quantity:'1'},
    ]);

    const addItem = (itemID) =>{
        const updatedItems = items.map((item) =>{    
            return(
                itemID === item.id 
                ? { ...item, quantity: item.quantity +1 } 
                : item
            );
        });
        setItems(updatedItems); 
        console.log('exito');
    }

    return(
        <ItemsContext.Provider value={{ items, addItem }}>
            {children}
        </ItemsContext.Provider>
    );
}
