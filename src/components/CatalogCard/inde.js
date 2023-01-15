import React from 'react'
import { GrBasket } from 'react-icons/gr'
// import { useNavigate } from 'react-router-dom'
import { cups } from '../../helpers/fake-backend'
import { Link } from 'react-router-dom'





// import CartPage from '../../pages/cartPage';

const CatalogCard = ({ brand, image, modal, price, id, description, setCartItems,count }) => {
    // const navigate = useNavigate()


    const onAdd = () => {
        // const exist = cartItems.find(x => x.id === cups.id)

        // if(exist){
        //   setCartItems(cartItems.map(x =>x.id ===cups.id ?  {...exist, qty:exist.qty +1} :x ))
        // }else{
        //   setCartItems([...cartItems, {...cups, qty : 1}])
        // }


        setCartItems(prev => [...prev, { id, brand, image, modal, price ,count}])

    }


    return (
// onClick={() => navigate(`/details/${id}`) }

        <div className='Catalog__Card'>
            <li className='count__card'>{count}</li>
            <div className='image_contaner'>
                <Link to='/details/:id'>
                <img src={image} alt='cup' onClick={onAdd} />
                </Link>
            </div>

            <div className='bottom__card'>

                <ul>
                    <li> <h1>{brand}</h1></li>
                    <li>{price}</li>
                </ul>
                <li className='nike__vnf'>{modal} </li> <button className='addToCart' onClick={onAdd}><p>add_to_cart</p><GrBasket /></button>
            </div>

        </div>
    )




}

export default CatalogCard;    