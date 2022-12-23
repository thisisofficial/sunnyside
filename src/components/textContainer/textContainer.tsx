import React from 'react'
import { Button } from '../button/button.tsx'
import './textContainer.css'

interface TextContainerProps {
    title: string;
    text: string;
    label: string;
    labelColor: string;
    labelLink?: string;
}

export const TextContainer = ({title, text, label, labelColor, labelLink} :  TextContainerProps) =>{
  return (
    <div className='text-container'>
        <div className='text-container-title'>{title}</div>
        <div className='text-container-content'>{text}</div>
        <div className='text-container-button'><Button label={label} color={labelColor} link={labelLink}/></div>
    </div>
  )
}
