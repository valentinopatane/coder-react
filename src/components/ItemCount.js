import React, {useState} from 'react';
import './style.css';
import {Link} from 'react-router-dom'

function ItemCount({stock, initial, onAdd}){

    const [counter, setCounter] = useState(initial);
    function Increment(){
        if(counter !== stock){
            setCounter(counter +1);
        }
    } 
    function Decrement(){
        if(counter !== initial){
            setCounter(counter-1)
        }
    }
    return(
        <>
            <div className='count'>
                <p>Cantidad: {counter}</p>
                <div className='btn-section'>
                    <button onClick={Increment}>↑</button>
                    <button onClick= {Decrement}>↓</button>
                    <button onClick={()=> onAdd(counter)}>+</button>
                </div>
            </div>

            <Link className='btn-section_child' to={'/cart'}>Finalizar compra</Link>
        </>
    );
};

export default ItemCount;




