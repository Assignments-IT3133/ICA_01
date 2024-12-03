import { useState } from 'react';
import '../assets/CSS/layout.css';


export default function Product({flower, addData}){

    const [qty,setQty]=useState(1);

    const handleData=()=>{
        addData(flower,qty);
    }
 
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require('../assets/image/'+flower.img)} />
                <div class="card-body">
                    <h5 class="card-title">Price:</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value={qty}
                        onChange={(e)=>setQty(e.target.value)} />
                    </div>
                    <button class="card-button"
                    onClick={handleData}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}