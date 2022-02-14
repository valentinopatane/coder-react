import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';


import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer= () =>{
    const [user, setUser] = useState([]);

    let id = useParams();
    let userID = id.id;
    
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${userID}`).then(
            (res)=> 
            setUser(res.data)
            );
    }, [userID]);

    return(
        <>
            <div className="item_detail_container">
                <ItemDetail user={user}></ItemDetail>
            </div>
        </>
    );
}

export default ItemDetailContainer;
