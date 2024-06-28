import React from 'react'
import Button from './Button'
import Animation from './Animation'

const ContactSection = () => {
  return (
    <div className="contactus-form-container" id="Contact Me">
                <Animation>
                <h1 className="contactus-heading">Get in touch</h1>
                </Animation>
                <Animation><h3 className="contactus-subHeading">Quetions, thoughts or just want to say hello?</h3></Animation>
                <div className="form-container-img">
                <Animation>
                <form className="form" action="">
                        <div className="formfield-container">
                            <Animation>                
                                <img src="../src/assets/contact-img.svg" className='img' alt="" />
                            </Animation>
                            <div className='form-container'>
                            <Animation><div className='input'>
                                    <input className="formfield" type="text" name="fname" id="" placeholder="First Name"/>  
                                    <input className="formfield" type="text" name="lname" id="" placeholder="Last Name"/>   
                                </div></Animation>
                                
                                <Animation><div className='input'>
                                    <input className="formfield" type="email" name="email" id="" placeholder="Email address"/>
                                    <input className="formfield" type='text' name="number" id="" placeholder="Phone no."/>
                                </div></Animation>
                                <Animation><div className='text-area'>
                                    <textarea className="formfield formfield-textarea" name="message " id="" cols="30" rows="10" placeholder="Message"></textarea>
                                </div></Animation>
                                <Animation>
                                <button className='send-btn button'>
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                    </div>
                                </div>
                                <span>Send</span>
                                </button>
                                </Animation>
                                
                            </div>
                        </div>
                    </form>
                </Animation>
                    
                </div>
            {/* </div> */}
    </div>
  )
}

export default ContactSection