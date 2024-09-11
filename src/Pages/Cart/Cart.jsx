import './Cart.css'
import {useCart} from '../../Components/CartContext/CartContext'
import DeleteBtn from '../../../public/assets/delete-filled.png'
import Pink from '../../Components/PinkComponent/Pink'

function Cart(){

 

  const { cart, removeFromCart} = useCart(); // جلب حالة السلة

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);


 

  
 
  return (
    <div id='AllCartPage'>
       <div id='shopBackground'>
    <label id='backshopbig'>Cart</label>
    <div>
    <label id='homeshop'>Home &gt; </label>
    <label id='smallshop'>Cart </label>
    </div>
    </div>

    <div id='ProductCartFullDiv'>
      <div id='LeftCartDiv'>

<div id='CartProductTitles'>
  <label className='CartProductLabels'>Product</label>
  <label className='CartProductLabels'>Price</label>
  <label className='CartProductLabels'>Quantity</label>
  <label className='CartProductLabels'>Subtotal</label>
</div>

<div id='CartSingleProduct'>
        {cart.map((item, index) => (
          <div className='MyCartProduct' key={index}>
            <img className='CartProductImg' src={item.image}/>
            <label className='CartProductName' id='CartProductTitleWidth'>{item.title}</label>
            <label className='CartProductName'>${item.price}</label>
            <label className='CartLabelQuantity'>{item.quantity}</label>
            <label className='CartProductTotal'>{(item.price * item.quantity).toFixed(2)}</label>
            <button className='DelBTN' onClick={() => removeFromCart(item.id)}><img src={DeleteBtn}/></button>
            
            
          </div>
        ))}
      </div>
      </div>

      <div id='RightCartDiv'>
        <label id='CartTotalss'>Cart Totals</label>

        <div className='TotalsLabels'>
          <label className='SubLabelTitle'>Subtotal</label>
          <label className='SubNumber'> ${subtotal.toFixed(2)}</label>
        </div>

        <div className='TotalsLabels'>
          <label className='SubLabelTitle'>Total</label>
          <label className='TotalNumber'> ${subtotal.toFixed(2)}</label>
        </div>

        <button id='CheckBtn'>Check Out</button>
      </div>
      
    </div>
      
      

      <Pink></Pink>
    </div>
  );
}

export default Cart