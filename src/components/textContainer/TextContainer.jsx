import React from 'react'
import { Button } from '../button/Button.jsx'
import './textContainer.css'

export const TextContainer = ({title, text, label, labelColor, labelLink}) =>{
  return (
    <div className='text-container'>
        <div className='text-container-title'>{title}</div>
        <div className='text-container-content'>{text}</div>
        <div className='text-container-button'><Button label={label} color={labelColor} link={labelLink}/></div>
    </div>
  )
}
