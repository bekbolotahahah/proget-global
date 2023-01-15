import React from 'react'


const Cards = ({brand,image,modal,price,id,description}) => {

  return (



  
      <div className='father_col'>


        
        <div className="col">
          <div className="firstImage" >
            <img src={image} alt="cap"/>
          </div>
          <div className='title_2'>
            <p className="pipi_1">{description}</p>
            <h4>{brand}</h4>
            <p className="pipi">  {modal}</p>
            <br></br>
            <p className="price">{price}</p>
          </div>
        </div>
      </div>  
   

  )
}

export default Cards;    