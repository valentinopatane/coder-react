import React from 'react';
import Item from './Item';
import {Link} from "react-router-dom";

const ItemList = ({ users })=>{
    return(
        <div className='itemList'>
            {users.map((user)=>{
                return (
                    <div className="itemList_div" key={user.id}>
                        <Link className="itemList_link" to={`../shop/item/${user.id}`}>
                            <Item user={user}></Item>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}




export default ItemList;