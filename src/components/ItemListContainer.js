import React from "react";
import ItemList from "./ItemList";


function ItemListContainer(){
    const [users, setUsers] = React.useState([]);

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=> setUsers(json));
    }, []);
    return(
        <>
            <ItemList users={users}></ItemList>
        </>
    )
}

export default ItemListContainer;
