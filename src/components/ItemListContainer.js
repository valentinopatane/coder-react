import React from "react";
import ItemList from "./ItemList";


function ItemListContainer(){
    const [items, setItems] = React.useState([]);

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=> setItems(json));
    }, []);
    return(
        <>
            <ItemList items={items}></ItemList>
        </>
    )
}

export default ItemListContainer;
