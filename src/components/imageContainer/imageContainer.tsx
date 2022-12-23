import React from 'react'
import './imageContainer.css'

interface ImageContainerProps {
    text?: string;
    title?: string;
    image: string;
    color?: string;
    galery?: boolean;
}

export const ImageContainer = ({text, title, image, color, galery} :  ImageContainerProps) => {
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
