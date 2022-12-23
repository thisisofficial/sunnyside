import React from 'react'
import { ImageContainer } from '../../components/imageContainer/imageContainer.tsx'
import Cone from 'C:/Users/thisi/sunnyside/src/assets/desktop/image-gallery-cone.jpg'
import Milk from 'C:/Users/thisi/sunnyside/src/assets/desktop/image-gallery-milkbottles.jpg'
import Orange from 'C:/Users/thisi/sunnyside/src/assets/desktop/image-gallery-orange.jpg'
import Sugar from 'C:/Users/thisi/sunnyside/src/assets/desktop/image-gallery-sugarcubes.jpg'
import './tileSection.css'

export const TileSection = () => {
  return (
    <section className='tiles-container'>
        <div className='flex-tile'>
            <ImageContainer image={Milk} galery/>
            <ImageContainer image={Orange} galery/>
        </div>
        <div className='flex-tile'>
            <ImageContainer image={Cone} galery/>
            <ImageContainer image={Sugar} galery/>
        </div>
    </section>
  )
}
