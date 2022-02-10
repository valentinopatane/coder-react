import React from 'react';
import ItemListContainer from './ItemListContainer'
import Particles from 'react-tsparticles';
import Config from './config/ParticleConfig';

const Category = (categoryID, key)=>{

    let categoryName = categoryID.prop;
    return(
        <>
            <div style={{color:'white',marginLeft:150}}>
                <h1>{categoryName} section</h1>
            </div>
            <div className='particles' >
                <Particles params={Config} style={{zIndex:-1}}/>
            </div>
            <ItemListContainer/>
        </>
    );

}

export default Category;