import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from "./styles.module.scss";

import Modal from './Modal/modal'
import Footer from '../Footer';
// import CartPage from '../../pages/cartPage';

const CartPart = ({ cartItems, onAdd, onRemove, count, brand, image, modal, price, id, description }) => {
  const [qontyty, setQontyty] = useState(1)
  const [show, setShow] = useState(false)
// const[totalPrise,setTotalPrise] = useState(price)

const hendleDecrement = () => {
  if(qontyty > 1){
      setQontyty(prevCount => prevCount -1)
  }

}

const handleIncremeny = () => {
  if(qontyty < 10){
    setQontyty(prevCount => prevCount +1)
  }
  
}





  return (
    <div className={classes.onteyner__1}>
      <nav className={classes.ToHome}>
        <li ><Link to="/" > Главная  </Link></li>
        <li className={classes.iconn}><a href>{">"}</a></li>
        <li className={classes.cat}>Kорзина</li>
      </nav>




      <div className={classes.block}>
        {
          cartItems.length === 0 && <div className={classes.cart__emty} >
            <div className={classes.cart__emty__to}>
              <h1>Ваша корзинка пуста </h1>
              <h2>перейдите в католог что-бы заполнить корзинку</h2>

            </div>
            <div > <ul className={classes.img1} /> <Link to='/catalog'><button className={classes.cart44}>перейти в Каталог</button></Link></div>
          </div>
        }
      </div>
      <div className={classes.cart__content}>
        {cartItems.map((item) => (
          <div key={item.id} className={classes.cart__block}>
            <div className={classes.cart__img}>
              <img src={item.image} alt="" />
            </div>
            <div className={classes.inc__dec}>
              <div><button className={classes.add} onClick={handleIncremeny} >+</button></div>
              <div><span>{qontyty}</span></div>
              <div> <button className={classes.remuve} onClick={hendleDecrement}>-</button></div>


            </div>
            <div className={classes.inc__Brand}>
              <div><h1>{item.brand}</h1></div>

              <div><h2>{item.modal}</h2></div>
            </div>


            <div className={classes.prise}><h1> {item.price.toFixed(2) * qontyty} сом</h1>

            </div>

          </div>
        ))

        }
      </div>


      <ul className={classes.cart}>



        <div className={classes.inputs__cart}>
          <li className={classes.cart1}>Ваша информация</li>
          <div> <input className={classes.cart2} placeholder='Имя' onChange={(event) => console.log(event.target.value)}></input></div>
          <div> <input className={classes.cart3} placeholder='Фамилия' onChange={(event) => console.log(event.target.value)}></input></div>
          <div>   <input className={classes.cart2} placeholder='+996...' onChange={(event) => console.log(event.target.value)}></input></div>
          <div>   <input className={classes.cart3} placeholder='Email' onChange={(event) => console.log(event.target.value)}></input></div>
          <div>
            <input className={classes.cart2} placeholder='Адресс' onChange={(event) => console.log(event.target.value)}></input></div>





        </div>
        <div > <button className={classes.cart4} onClick={() => setShow(true)}>купить</button></div>

      </ul>
      <Modal show={show} />
      <Footer />
    </div>
  )
}

export default CartPart;    