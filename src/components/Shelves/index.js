import React  from 'react'
import firstOne from "../../styles/img/1_2.png"




// import CartPage from '../../pages/cartPage';

const Shelves = () => {

  return ( 


   <div className='father'>
       <div className='father_col'>


        <div className="col">
          <div className="firstImage" >
            <img src={firstOne} alt='first' />
          </div>
          <div className='title_2'>
            <p className="pipi_1">2021</p>
            <h4>New Era</h4>
            <p className="pipi">Houston Rockets</p>
            <br></br>
            <p className="price">5600c</p>
          </div>
        </div>

        <div className="col">
          <div className="firstImage" >
            <img src={firstOne} alt='first' />
          </div>
          <div className='title_2'>
            <p className="pipi_1">2021</p>
            <h4>New Era</h4>
            <p className="pipi">Houston Rockets</p>
            <br></br>
            <p className="price">5600c</p>
          </div>
        </div>

        <div className="col">
          <div className="firstImage" >
            <img src={firstOne} alt='first' />
          </div>
          <div className='title_2'>
            <p className="pipi_1">2021</p>
            <h4>New Era</h4>
            <p className="pipi">Houston Rockets</p>
            <br></br>
            <p className="price">5600c</p>
          </div>
        </div>

      </div>
   </div>
  )
}

export default Shelves;    