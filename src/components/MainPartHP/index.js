import React from 'react'
import Big from "../../styles/img/big.png"
import firstOne from '../../styles/img/1_2.png'
  


const MainPart = () => {
  return (
     <div className='main_back'>


      <div className='main'>
        <div className='colum'>
          <div className="col">

            <div className='title_2'>

              <h4>Supreme</h4>
              <p className="pipi">Houston Rockets</p>
              <br></br>
              <p className="price">5600c</p>
            </div>
            <div className="firstImage" >
              <img src={firstOne} alt='first' />
            </div>
          </div>

          <div className="col">

            <div className='title_2'>

              <h4>New Era</h4>
              <p className="pipi">Houston Rockets</p>
              <br></br>
              <p className="price">5600c</p>
            </div>
            <div className="firstImage" >
              <img src={firstOne} alt='first' />
            </div>
          </div>
          <div className="col">

            <div className='title_2'>

              <h4>New Era</h4>
              <p className="pipi">Houston Rockets</p>
              <br></br>
              <p className="price">5600c</p>
            </div>
            <div className="firstImage" >
              <img src={firstOne} alt='first' />
            </div>
          </div>
        </div>

        <div className='title_3'>
          <h3>SUPREME & nEW era </h3>
          <p> COLLABARATION </p>
          <button className='button'> Открыть каталог</button>
        </div>
        <img src={Big} alt='first' className='Big' />

        <div className='radik'></div>
        <div className='radikk'></div>

      </div>
    </div>
  )
}

export default MainPart;