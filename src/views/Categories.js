import {useParams} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { db } from '../components/firebase/FirebaseConfig';
import { collection,query,where,getDocs } from 'firebase/firestore';
import Item from '../components/Item';
import { Link } from 'react-router-dom';
import '../components/style.css'
import Particles from 'react-tsparticles';
import Config from '../components/config/ParticleConfig';

import SubMenu from '../components/SubMenu';

const CategoryList = ()=>{
    const [categoryData, setCategoryData] = useState([]);

    const category = useParams();
    const categoryID = category.id
    useEffect(()=>{
        const getCategoryData = async () =>{
            const q = query(
                collection(db, 'products'),
                where('category', '==', categoryID)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id})
                console.log(doc.data())
            });
            setCategoryData(docs);
        };
        getCategoryData();
    },[categoryID])

    return(
        <>
            <SubMenu></SubMenu>
            <div className='particles' >
                <Particles params={Config} style={{zIndex:-1}}/>
            </div>
            <div  className="categorized_items">
            {categoryData.map((item)=>{
                return(
                <div key={item.id}>
                    <Link className="itemList_link" to={`../shop/item/${item.id}`}>
                        <Item item={item}></Item>
                    </Link>
                </div>
                )
            })}
            </div>

        </>
    );
}

export default CategoryList;