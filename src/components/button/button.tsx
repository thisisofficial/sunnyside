import React from 'react'
import './button.css'

interface ButtonProps {
    label: string;
    color: string;
    link?: string;
}

export const Button = ({label, color, link} : ButtonProps) =>{
  return (
    <div className='button-container'>
        <a style={{textDecoration: 'none'}}href={link}>
            <div className='button-label'>{label}</div>
            <div className='button-background' style={{backgroundColor: color}}/>
        </a>
    </div>
  )
}
