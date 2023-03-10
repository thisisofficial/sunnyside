import React from 'react'
import './userContainer.css'


export const UserContainer = ({image, text, name, work}) =>{ 
    return(
    <div className='user-container'>
        <div className='user-pp' style={{backgroundImage: `url(${image})`}}/>
        <div className='user-testimony'>{text}</div>
        <div className='user-info-container'>
            <div className='user-name'>{name}</div>
            <div className='user-work'>{work}</div>
        </div>
    </div>
    
)}
