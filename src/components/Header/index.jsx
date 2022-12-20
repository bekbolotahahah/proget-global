import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { GrBasket } from 'react-icons/gr';
import { Link } from 'react-router-dom';



const Header = () => {
    return (

      <div className="Header">
      <nav className="homepage">
        <div className="cpan">

        </div>
        <ul className="img1" />
        <ul className="frame">
          <li><Link to='/home-page'> Главная </Link></li>
          <li><Link to='/catalog'> Каталог </Link></li>
          <li><Link to='/cart'> Бренд</Link></li>
          <li><Link to='/cart'> O нас </Link></li>
        </ul>
        <ul className="line">
          <li className="inp"><input type="text" className="inp1" />
          </li><li className="icon"><a href><CiSearch /></a><li className="iconn"><a href="/cart" ><GrBasket /></a></li>
            <li className="l1">
            </li></li>
          <div className="l2" />

        </ul>


      </nav>

    </div>

     );
}



export default Header;
