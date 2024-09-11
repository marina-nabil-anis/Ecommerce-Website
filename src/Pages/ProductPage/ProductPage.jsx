import './ProductPage.css'
import Stars from '../../../public/assets/stars.png'
import CounterPosts from '../../Components/CounterPosts/CounterPosts'
import Facebook from '../../../public/assets/facebook.png'
import Linkedin from '../../../public/assets/likedin.png'
import Twitter from '../../../public/assets/twitter.png'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useCart} from '../../Components/CartContext/CartContext'

function SingleProduct() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // addto cart
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);


 // زيادة أو تقليل عدد المنتجات
 const handleQuantityChange = (amount) => {
  if (quantity + amount >= 1) {
    setQuantity(quantity + amount);
  }
};
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {product ? (
        <div id='fullProductdiv'>

<div id='AllTitlesDiv'>
<label className='ProductTitles'>Home </label>
<label>&gt;</label>
<label className='ProductTitles'>Shop</label>
<label>&gt;</label>
<label className='ProductTitles'>|</label>
<label className='SmallProductName'>{product.title}</label>
</div>

<div id='DetailsMyProduct'>
    <div id='leftDiv'>
    <img src={product.image} alt={product.title} className='MyProductPhoto' />
    </div>

    <div id='RightProductDiv'>
    <label className='MyProductTitle'>{product.title}</label>
    <label className='MyProductPrice'>Price: ${product.price}</label>

    <div id='ReviewDiv'>
        <img src={Stars}/>
        <label className='ReviewLabels'>|</label>
        <label className='ReviewLabels'>5 Customer Review</label>
    </div>
 
    <p className='SmallDescription'>{product.description}</p>

<label className='SCLabels'>Size</label>

<div id='SizebtnsDiv'>
    <button className='SizeBtns'>L</button>
    <button className='SizeBtns'>XL</button>
    <button className='SizeBtns'>XS</button>
</div>

<label className='SCLabels'>Color</label>

<div id='ColorBtnsDiv'>
    <button className='ColorBtns' id='FirstColor'></button>
    <button className='ColorBtns' id='SecColor'></button>
    <button className='ColorBtns' id='ThirdColor'></button>
</div>
<br></br>
<div id='CounterAndBtn'>
 {/* <CounterPosts></CounterPosts> */}
 <div className="Rates">
 <button className="plus" onClick={() => handleQuantityChange(1)}>+</button>
        <span className="numrates">{quantity}</span> 
        <button className="Minus" onClick={() => handleQuantityChange(-1)}>-</button>
      </div>
 <button id='CartMainBtn' onClick={() => addToCart(product, quantity)}>Add To Cart</button>
</div>

<hr id='LittleHr'></hr>

<div id='GreyLabels'>
    <div className='ColumnGrey'>
        <label className='MyGreyLabels'>SKU</label>
        <label className='MyGreyLabels'>Category</label>
        <label className='MyGreyLabels'>Tags</label>
        <label className='MyGreyLabels'>Share</label>
    </div>

    <div className='ColumnGrey'>
        <label className='MyGreyLabels'>:</label>
        <label className='MyGreyLabels'>:</label>
        <label className='MyGreyLabels'>:</label>
        <label className='MyGreyLabels'>:</label>
    </div>

    <div className='ColumnGrey'>
        <label className='MyGreyLabels'>SS001</label>
        <label className='MyGreyLabels'>{product.category}</label>
        <label className='MyGreyLabels'>{product.category}, Home, Shop</label>
        <div id='SocialIcons'>
            <img src={Facebook}/>
            <img src={Linkedin}/>
            <img src={Twitter}/>
        </div>
    </div>
</div>

    </div>


</div>

<hr id='MyBigHr'></hr>    
<div id='DescriptionDiv'>
    <h3 id='DescriptionTitle'>Description</h3>
    <p id='DescripeP'>{product.description}</p>
</div>
          
      
         
          
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default SingleProduct;
