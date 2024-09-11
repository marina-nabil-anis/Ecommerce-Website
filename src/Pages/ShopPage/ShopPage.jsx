import { useEffect, useState } from 'react';
import './ShopPage.css'
import Pink from '../../Components/PinkComponent/Pink'
import { Link } from 'react-router-dom';
import {useCart} from '../../Components/CartContext/CartContext'

function Shop(){
const [arrayOfProducts, setArrayOfProducts] = useState([]);
useEffect(()=>{
    function CallApi(){
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setArrayOfProducts(json)}
                )
    }

    CallApi();
},[])

const { addToCart } = useCart();
    return(
       <div id='ShopDiv'>
<div id='shopBackground'>
    <label id='backshopbig'>Shop</label>
    <div>
    <label id='homeshop'>Home &gt; </label>
    <label id='smallshop'>Shop</label>
    </div>
    
</div>
   <div id='ProductsWrapper'>
    {arrayOfProducts.map((product)=>{
        return(
           
            <Link className='linkProducts'to={`/product/${product.id}`}>
            <div className='ProductItem'>
                
                <img className='ProuctImg' src={product.image}/>
                <label className='title'>{product.title}</label>
                <label className='categoryname'>{product.category}</label>
                <label className='price'>${product.price}</label>
                
           
            </div>
            </Link>
            
            
            
        )
    })}
   </div>
   <Pink></Pink>
       </div>
    )
}

export default Shop
