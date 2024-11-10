import React from 'react'
import Image from 'next/image'
import myImage from "../../public/profileimage.jpeg"
import Button from './HeroButton';

export default function Hero(){
  return (
    <div className='main-div'>
    <div className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-heading'>Hello, I'm </h1>
          <h1 className='hero-heading'> Misbah Nayab</h1>
          <p className='hero-paragraph'>I am an Elementary School Teacher and a Web Designer. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric designs. </p>
          <Button className='hero-button'/>
        </div>
        <div>
          <Image src={myImage} alt="profile image" className='hero-image'/>
        </div>
    </div>
    </div>
  )
}


 


