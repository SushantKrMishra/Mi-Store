import React from 'react'
import '../styles/HotItemCard.css'
const HotItemCard = ({name,index,price,image}) => {
  return (
    <div className='HotItemCard'>
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default HotItemCard