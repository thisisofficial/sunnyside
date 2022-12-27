import React from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './headerSection.css'

export const HeaderSection = () => {
  return (
    <div className='header-container'>
        <Logo className='header-logo'/>
        <ul className='header-menu'>
            <li className='list-item'><div>About</div></li>
            <li className='list-item'><div>Services</div></li>
            <li className='list-item'><div>Projects</div></li>
            <li className='list-item-main'><div>Contact</div></li>
        </ul>
    </div>
  )
}
