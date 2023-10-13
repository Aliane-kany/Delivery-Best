import React from 'react'
// import Girl1 from "../asset/Girl1"
import Button from './button'

const Card = ({name, image,description, price,link}) => {

  return (
    <div className='card'>
      <div className='foto'>
      <img src={image} alt="" className='product-image'/>

      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <span>{price}</span>
      <h4>{sharee}</h4>
      <Button name="Add to Cart"/> 
    </div>
  )
}

export default Card