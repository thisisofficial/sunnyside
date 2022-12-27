import React from 'react'
import './heroSection.css'
import { HeaderSection } from '../headerSection/HeaderSection.jsx'
import {ReactComponent as Arrow} from '../../assets/icon-arrow-down.svg'

export const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className='hero-section-header'><HeaderSection/></div>
        <div className='hero-section-contents'>
            <div className='hero-section-title'>We are Creatives</div>
            <Arrow className='hero-section-arrow'/>
        </div>
    </section>
  )
}
