import React from 'react'
import { UserContainer } from '../../components/userContainer/UserContainer.jsx'
import Emily from '../../assets/image-emily.jpg'
import Jennie from '../../assets/image-jennie.jpg'
import Thomas from '../../assets/image-thomas.jpg'
import './userSection.css'


export const UserSection = () =>{
  const users =[
    {
      image: Emily,
      name: 'Emily R.',
      work: 'Business Owner',
      text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    },
    {
      image: Thomas,
      name: 'Thomas S.',
      work: 'Chief Operating Officer',
      text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    },
    {
      image: Jennie,
      name: 'Jennie F.',
      work: 'Business Owner',
      text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    },
  ]

  return (
    <section className='user-section'>
      <div className='user-section-title'>CLIENT TESTIMONIALS</div>
      <div className='user-section-users'>
        {users.map((user) => (
          <div className='user-section-user' key={user.name}>
            <UserContainer
              image={user.image} 
              text={user.text}
              name={user.name} 
              work={user.work}/>
          </div>
          
        ))}
      </div>
    </section>
  )
}
