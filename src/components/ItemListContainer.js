import React from "react";
import ItemList from "./ItemList";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from './firebase/FirebaseConfig';


function ItemListContainer(){
    const [items, setItems] = React.useState([]);
    
    React.useEffect(()=>{
        const getProducts = async ()=>{
            const q = query(collection(db, "products"));
            const docs = [];
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id})
            })
            setItems(docs);
        }
        getProducts();
    }, []);
    return(
        <>
            <ItemList items={items}></ItemList>
        </>
    )
}

export default ItemListContainer;
