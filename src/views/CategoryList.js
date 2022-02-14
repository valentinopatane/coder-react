import {useParams} from 'react-router-dom';
import React from "react";

import SubMenu from '../components/SubMenu';
import Category from '../components/Category';

const CategoryList = ()=>{
    let id = useParams();
    let categoryID = id.id;

    return(
        <>
            <SubMenu></SubMenu>
            <div>
                <Category prop={categoryID} key={id}/>
            </div>
        </>
    );
}

export default CategoryList;