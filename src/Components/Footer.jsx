import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import Animation from './Animation';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-wrapper">
          <Animation>
            <div className="link-wrapper">
              <div>
                  <a href="#Projects">Projects</a>
              </div>
              <div>
                  <a href="#Skills">Skills</a>
              </div>
              <div>
                  <a href="#Contact Me">Contact Me</a>
              </div>
            </div>
          </Animation>
          <Animation>
            <div className="icon-wrapper">
              <FaLinkedin  className="icon"/>
              <FaGithub className="icon"/>
              <FaInstagram className="icon"/>
              <FaTwitter className="icon"/>
              <HiOutlineMail className="icon"/>
            </div>
          </Animation>
      </div>
    </div>
  )
}

export default Footer