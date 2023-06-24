import React from 'react'
import '../styles/Videos.css'
import VideoCard from './VideoCard.jsx'
const Videos = ({videos}) => {
  return (
    <div className='videos'>
      {
        videos.map((item,index)=>(
          <VideoCard index={index} key={item.image} image={item.image}/>
        ))
      }
    </div>
  )
}

export default Videos