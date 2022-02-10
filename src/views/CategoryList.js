import {useParams} from 'react-router-dom';
import React, {useState} from "react";
import Navbar from '../components/NavBar';
import SubMenu from '../components/SubMenu';
import Category from '../components/Category';

const CategoryList = ()=>{
    let id = useParams();
    let categoryID = id.id;

    return(
        <>
            <Navbar></Navbar>
            <SubMenu></SubMenu>
            <div>
                <Category prop={categoryID} key={id}/>
            </div>
        </>
    );
}

export default CategoryList;