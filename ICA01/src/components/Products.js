import {flowers} from '../components/FlowerDB'
import '../assets/CSS/layout.css';
import Product from './Product';
import Cart from './Cart'
import {useState} from 'react'


export default function Products(){
    const [cart, setCart]=useState([]);

    const addData=(flower, qty)=>{
        const result=cart.some(item=>item.id === flower.id)

        if (result){
            setCart(cart.map(item=>
                item.id === flower.id
            ?{...item, qty: item.qty+qty, totalPrice: (item.qty+qty)*flower}
            :item
            ));
        }
        else{
            setCart([...cart,{...flower,qty, totalPrice:qty*flower.price}])
        }
    }

   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        flowers.map(flower=>(
                            <Product key={flower.id} flower={flower} addData={addData}/>
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                <Cart cart={cart}/>
                }
            </div>
        </>
    );

}