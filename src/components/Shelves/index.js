import React from 'react'

import { cups } from '../../helpers/fake-backend'
import Cards from '../cards'




// import CartPage from '../../pages/cartPage';

const Shelves = () => {

  return (


    <div className='father'>
    {
      cups.slice(0,3).map(item => (
        <Cards
        key={item.id}
        brand={item.brand}
        image={item.image}
        modal={item.modal}
        price={item.price}
        description={item.description}

        />
      ))
    }
    </div>
  )
}

export default Shelves;    