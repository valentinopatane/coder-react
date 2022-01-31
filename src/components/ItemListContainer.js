import React from "react";
import styled from "styled-components";
import ItemCount from "./ItemCount";

function Greeting(props){
    return(
        <>
            <Greet>
                <div>
                    <h1>¡Bienvenido <span>{props.name}</span>!</h1>
                </div>
            </Greet>

            <Counter>
                <div className="Counter" >
                    <ItemCount stock={5} initial={1} />
                    <ItemCount stock={8} initial={2} />
                    <ItemCount stock={10} initial={3} />
                </div>
                
            </Counter>
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
const Counter = styled.div`
    .Counter{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-top:50px;
    }

`

export default Greeting;