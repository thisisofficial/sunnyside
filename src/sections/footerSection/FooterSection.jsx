import React from 'react'
import './footerSection.css'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Facebook} from '../../assets/icon-facebook.svg'
import {ReactComponent as Instagram} from '../../assets/icon-instagram.svg'
import {ReactComponent as Twitter} from '../../assets/icon-twitter.svg'
import {ReactComponent as Pinterest} from '../../assets/icon-pinterest.svg'

export const FooterSection=() =>{
  return (
    <footer>
        <Logo className='footer-logo'/>
        <div className='footer-extras'>
            <div className='footer-extra'>About</div>
            <div className='footer-extra'>Services</div>
            <div className='footer-extra'>Projects</div>
        </div>
        <div className='footer-icons'>
            <Facebook className='footer-icon'/>
            <Instagram className='footer-icon'/>
            <Twitter className='footer-icon'/>
            <Pinterest className='footer-icon'/>
        </div>
    </footer>
  )
}
