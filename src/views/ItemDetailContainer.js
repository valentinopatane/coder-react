import React, {useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer= () =>{
    const [item, setItem] = useState([]);

    let id = useParams();
    let itemID = id.id;
    
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${itemID}`).then(
            (res)=> 
            setItem(res.data)
            );
    }, [itemID]);

    return(
        <>
            <div className="item_detail_container">
                <ItemDetail item={item}></ItemDetail>
            </div>
        </>
    );
}

export default ItemDetailContainer;
