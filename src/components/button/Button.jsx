import React from 'react'
import './button.css'


export const Button = ({label, color, link}) =>{
  return (
    <div className='button-container'>
        <a style={{textDecoration: 'none'}}href={link}>
            <div className='button-label'>{label}</div>
            <div className='button-background' style={{backgroundColor: color}}/>
        </a>
    </div>
  )
}
