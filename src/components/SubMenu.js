import React from "react";
import {Link} from "react-router-dom";
import './style.css';

const SubMenu = ()=>{
    return(
            <div className="subMenu">
                <ul>
                    <Link className="subMenu_link" to={"/category/all"}>All</Link>
                    <Link className="subMenu_link" to={"/category/:top"}>Top pieces</Link>
                    <Link className="subMenu_link" to={"/category/tshirts"}>T-Shirts</Link>
                    <Link className="subMenu_link" to={"/category/sneakers"}>Sneakers</Link>
                </ul>
            </div>
    )
}


export default SubMenu