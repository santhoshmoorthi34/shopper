import React, { useContext } from 'react'

import './cartitem.css'
import { ShopContext } from '../context/shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitem = () => {
    const {getTotalCartAmount,all_product, cartItems, removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitem'>
      
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Titile</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr /> 
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return   <div>
             <div className="cartitem-format cartitems-format-main">
              <img src={e.image} alt="" className='carticon-producticon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems-qiantity'>{cartItems[e.id]}</button>
              <p>${e.new_price *cartItems[e.id]}</p>
              <img className='remove-icon' src={remove_icon} onClick={()=>{ removeFromCart(e.id)}} alt="" />
             </div>
             <hr />
             </div>
        }
        return null;

      } )}

<div className="cartitem-down">
        <div className="cartitem-total">
          <h1>cart-total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>subtotal</p>
              <p>${getTotalCartAmount ()}</p>
            </div>
            <hr />

            <div className="cartitem-total-item-1">
              <p>shipping fee</p>
              <p>free</p>
            </div>

            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount ()}</h3>
            </div>

            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>




    </div>

  )
}

export default Cartitem
