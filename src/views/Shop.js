import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import Particles from "react-tsparticles";
import Config from "../components/config/ParticleConfig.js";
import SubMenu from "../components/SubMenu";
import "../components/style.css"
function Shop(){
    return(
        <>
            <div className='particles' >
                <Particles params={Config} style={{zIndex:-1}}/>
            </div>
            
            <SubMenu/>
            <ItemListContainer/>
        </>
    )
}

export default Shop;


            