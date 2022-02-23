import React, {useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from "../components/firebase/FirebaseConfig";



const ItemDetailContainer= () =>{
    const [item, setItem] = useState([]);

    let { id }= useParams();

    
       useEffect(()=>{
        const getProduct = async ()=>{
            const q = query(collection(db, "products"), where(documentId(),"==", id));
            const docs = [];
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id})
            })
            setItem(docs);
        }
        getProduct();
    }, [id]);

    return(
        <>
            <div className="item_detail_container">{item.map((data)=>{
                return(<ItemDetail item={data} key={data.id}></ItemDetail>)
            })}
                
            </div>
        </>
    );
}

export default ItemDetailContainer;
