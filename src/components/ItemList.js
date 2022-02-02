import React from 'react';
import Item from './Item';

const ItemListComponent = ()=>{
    const [users, setUsers] = React.useState([]);

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=> setUsers(json));
    }, [])

    return(
        <div className='itemList'>
            {users.map((user)=>{
                console.log(user.name);
                return (
                    <div key={user.id}>
                        <Item name={user.name} email={user.email}></Item>
                    </div>
                )
            })}
        </div>
    )
}




export default ItemListComponent;