import * as React from 'react';
import './style.css'

const SuccessMsg =({purchaseID})=>{
    return(
        <div className="success">
            <p>Thanks for buying! Your transaction ID is: {purchaseID}</p>
        </div>
    )
}

export default SuccessMsg;