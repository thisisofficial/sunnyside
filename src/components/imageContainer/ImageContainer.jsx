import React from 'react'
import './imageContainer.css'


export const ImageContainer = ({text , title , image, color, galery}) => {
  return (
    <div className={`image-container ${galery&&'galery'}`} style={{backgroundImage: `url(${image})`}}>
        {title && 
        <div className='image-container-text-container' style={{color: color}}>
            <div className='title'>{title}</div>
            <div className='text'>{text}</div>
        </div>}
    </div>
  )
}
