import React from "react";
import styled from "styled-components";

function Greeting(props){
    return(
        <>
            <Greet>
                <div>
                    <h1>¡Bienvenido <span>{props.name}</span>!</h1>
                </div>
            </Greet>
        </>
    )
}

const Greet = styled.div`
    h1{
        margin-top: 50px;
        text-align:center;
        font-weight:100;
    }
    span{
        color: blue;
    }
`

export default Greeting;