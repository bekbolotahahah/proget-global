import React, {useState}  from 'react'
import { Link } from 'react-router-dom';
import classes from "./styles.module.scss";

import Modal from './Modal/modal'
// import CartPage from '../../pages/cartPage';

const CartPart = () => {
  const[show, setShow] = useState(false)
  return ( 
    <div className={classes.onteyner__1}>  
    <nav className={classes.ToHome}>
      <li ><Link to="/" > Главная  </Link></li>
      <li className={classes.iconn}><a href>{">"}</a></li>
      <li className={classes.cat}>Kаталог</li>
    </nav>

    
    
    <ul className={classes.cart}> 
    
    <div className={classes.block}></div>

        <li className={classes.cart1}>Ваша информация</li>
        <input className={classes.cart2} placeholder='Имя'></input>
        <input className={classes.cart3}  placeholder='+996-772218466'></input>
        <button className={classes.cart4} onClick={() => setShow(true) }>купить</button>
    </ul>
  <Modal show={show}/>
  
    </div>
  )
}

export default CartPart;    