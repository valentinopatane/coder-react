import React from 'react';
import HeaderHome from '../components/Header.js';
import Particles from "react-tsparticles";
import Config from "../components/config/ParticleConfig.js";


const Home = ()=>{
    return(
        <>
            <Particles className='particles' params={Config}/>
            <HeaderHome />
        </>

    );
}

export default Home;