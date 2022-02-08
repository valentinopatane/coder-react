import React from "react";

const ItemDetailContainer= () =>{
    const [user, setUser] = React.useState({});

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=> setUser(json[0]));
    }, []);

    return(
        <>
            <div>
                <ItemDetail user={user}></ItemDetail>
            </div>
        </>
    );
}

export default ItemDetailContainer;
