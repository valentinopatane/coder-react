import React from "react";
import styled from "styled-components";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

function ItemListContainer(props){
    const [users, setUsers] = React.useState([]);

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=> setUsers(json));
    }, []);

function onAdd(counter){
    if(counter > 0){
        console.log(`Añadiste ${counter} producto/s`);
    }
    else{
        console.log("No hay productos para añadir")
    }

}
    return(
        <>
            <Greet>
                <div>
                    <h1>¡Bienvenido <span>{props.greeting}</span>!</h1>
                </div>
            </Greet>

            <Counter>
                <div className="Counter" >
                    <ItemCount stock={5} initial={0} onAdd={onAdd}/>
                    <ItemCount stock={8} initial={1} onAdd={onAdd}/>
                    <ItemCount stock={10} initial={2} onAdd={onAdd}/>
                </div>
            </Counter>

            
            <ItemList users={users}></ItemList>
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

export default ItemListContainer;