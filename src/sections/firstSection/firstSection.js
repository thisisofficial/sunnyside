import React from 'react'
import { ImageContainer } from '../../components/imageContainer/imageContainer.tsx';
import { TextContainer } from '../../components/textContainer/textContainer.tsx';
import Egg from '../../assets/desktop/image-transform.jpg'
import Cup from '../../assets/desktop/image-stand-out.jpg'
import Cherry from '../../assets/desktop/image-graphic-design.jpg'
import Orange from '../../assets/desktop/image-photography.jpg'
import './firstSection.css'

export const FirstSection = () =>{
  return (
    <section>
        <div className='flex-container-reverse'>
          <div className='half'>
            <ImageContainer image={Egg}/>
          </div>
          <div className='half'>
            <TextContainer 
                title='Transform your brand' 
                text='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.' 
                label='LEARN MORE' 
                labelColor='#FAD400'/>
          </div>
        </div>
        <div className='flex-container'>
          <div className='half'>
            <ImageContainer image={Cup}/>
          </div>
          <div className='half'>
            <TextContainer 
                title='Stand out to the right audience' 
                text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.' 
                label='LEARN MORE' 
                labelColor='#FE7766'/>
          </div>  
        </div>
        <div className='flex-container'>
          <ImageContainer 
            text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.' 
            title='Graphic Design' 
            image={Cherry} 
            color='#24554A'/>
          <ImageContainer 
            text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.' 
            title='Photography' 
            image={Orange} 
            color='#052C3B'/>
        </div>
    </section>
  )
}
