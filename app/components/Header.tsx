import React from 'react'
import Image from 'next/image'
import Logo from "../../public/M Logo.png"
import Link from 'next/link'
import Button from "./HeaderButton"

export default function Header() {
  return (
    <div className='header-content'>
      <nav className='navigation'>
        <section className='logo-section'>
          <Image src={Logo} alt="Logo" className='logo-image'/>
          <h1 className='logo-heading'> Misbah </h1>
        </section>
        <section>
          <ul className='anchors-ul'>
            <li>
              <Link href="/" className='anchors'>Home</Link>
            </li>
            <li>
              <Link href="/About" className='anchors'>About</Link>
            </li>
            <li>
              <Link href="/Skills" className='anchors'>Skills</Link>
            </li>
            <Link href="/Contact">
              <Button className='header-button'/>
            </Link>
          </ul>
        </section>
      </nav>
    </div>
  )
}



