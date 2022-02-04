import React from 'react';
import Item from './Item';

const ItemList = ({ users })=>{
    return(
        <div className='itemList'>
            {users.map((user)=>{
                return (
                    <div key={user.id}>
                        <Item user={user}></Item>
                    </div>
                )
            })}
        </div>
    )
}




export default ItemList;