import React from 'react'
import Button from "./Button/Button"



export default function Contact() {
    return (
        <div className='contact-main-div'>
            <div className='contact-card'>
                <div className='contact-card-header'>
                    <h1 className='contact-card-title'> Contact Me</h1>
                    <p className='contact-card-paragraph'> Get in touch for collaboration, inquiries, or support. I am here to help!</p>
                </div>
                <div className='contact-card-content'>
                    <div className='contact-card-input'>
                        <label htmlFor="email" className='email'>Email</label>
                        <input type="email" placeholder='abc@gmail.com' className='input'/>
                    </div>

                    <div className='contact-card-message'>
                        <label htmlFor="message" className='message'>Message</label>
                        <textarea name="message" placeholder='Type your message here' className='card-text-area'/>
                    </div>
                </div>
                <div className='contact-button'>
                    <Button className='submit-button'/>
                </div>
            </div>
        </div>
    )
}
