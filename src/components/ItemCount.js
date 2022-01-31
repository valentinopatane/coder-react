import React, {useState} from 'react';
import './style.css';

function ItemCount({stock, initial}){

    let [counter, setCounter] = useState(initial);

    function onAdd(){
        setCounter(counter +1);
    } 

    if(counter > stock){
            counter = stock;
            alert("Llegaste al límite de stock disponible")
    }
    else if(counter < initial){
            counter = initial;
    }

    return(
        <div className='count'>
            <p>Cantidad: {counter}</p>
            <div className='btn-section'>
                <button onClick={onAdd}>+</button>
                <button onClick= {()=> setCounter(counter -1)}>-</button>
            </div>
        </div>

    );
};

export default ItemCount;