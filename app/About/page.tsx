import React from 'react'
import Image from 'next/image'
import Picture from "../../public/programming-image.jpg"
import Link from 'next/link'
import Button from "./Button"

export default function About() {
    return (
        <div className='main-div'>
            <div className='about-section'>
                <div className='about-image'>
                    <Image src={Picture} alt="about image" className='image' />
                </div>
                <div className='about-content'>
                    <h1 id="about" className='about-heading'> About </h1>
                    <p className='about-paragraph'> I am an educator and web developer passionate about creating engaging learning experiences both in the classroom and online. With a blend of teaching expertise and technical skills, I design interactive resources and websites that make complex topics accessible and enjoyable for learners. My mission is to inspire curiosity, foster creativity, and empower students to explore and succeed in the digital world </p>
                    <Link href="/home">
                    <Button className='download-button'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

