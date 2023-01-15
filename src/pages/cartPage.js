import React from 'react';

import CartPart from '../components/CartPart/index';


const CartPage = (props) => {

const{cartItems, onAdd} = props


  return (
    <div>
      
    <CartPart onAdd={onAdd} cartItems={cartItems}/>
   
    </div>
  )
}

export default CartPage;  