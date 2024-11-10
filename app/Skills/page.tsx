import React from 'react'
import Image from 'next/image'
import Icon1 from "../../public/90 Percent Image.jpg"
import Icon2 from "../../public/80 Percent Image.jpg"
import Button from "./Button"

export default function Skills() {
  return (
    <div className='main-div'>
      <div className='skills-section'>
        <h1 className='skills-heading1'> Skills </h1>
        <h2 className='skills-heading2'> Educational Skills </h2>

        <section className='educational-skills-section'>

          <div className='skills-content'>
            <h2 className='skills-heading'>Padagogical Skills</h2>
            <Image src={Icon1} alt="icon1" className='skills-image'/>
            <div className='skills-div'>
            <Button className='readmore-button'/>
            </div>
          </div>

          <div className='skills-content'>
            <h2 className='skills-heading'>Instructional Skills</h2>
            <Image src={Icon1} alt="icon1" className='skills-image'/>
            <div className='skills-div'>
            <Button className='readmore-button'/>
            </div>
          </div>

        </section>

        <h2 className='skills-heading2'> Programming Skills </h2>

        <section className='programming-skills-section'>

          <div className='skills-content'>
            <h2 className='skills-heading'>HTML</h2>
            <Image src={Icon1} alt="icon1" className='skills-image'/>
            <div className='skills-div'>
            <Button className='readmore-button'/>
            </div>
            
          </div>

          <div className='skills-content'>
            <h2 className='skills-heading'>CSS</h2>
            <Image src={Icon1} alt="icon1" className='skills-image'/>
            <div className='skills-div'>
            <Button className='readmore-button'/>
            </div>
          </div>

          <div className='skills-content'>
            <h2 className='skills-heading'>Typescript</h2>
            <Image src={Icon2} alt="icon2" className='skills-image'/>
            <div className='skills-div'>
            <Button className='readmore-button'/>
            </div>
          </div>

        </section>

      </div>
    </div>
  )
}
