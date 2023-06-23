import React from 'react'
import Offer from "./components/Offer.jsx"
import './styles/Offers.css'
const Offers = ({offers}) => {
  return (
    <div className='offersSection'>
      {offers.map((item,index)=>{
        return(
          <Offer key={item.image} index={index} src={item.image} link={item.url}/>
        )
      })}
    </div>
  )
}

export default Offers