import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
import Animation from './Animation';
import { Link } from 'react-router-dom';
import { Copyright, GitBranch, Linkedin, Mail } from 'lucide-react';
import { SiInstagram,SiGmail,SiLinkedin,SiGithub } from 'react-icons/si';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TiMessage } from 'react-icons/ti';
import { GoPerson } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className='w-full absolute mt-[-117px] pb-8 md:pb-0 md:mt-[-90px]  text-white'>
      <div className="row flex flex-col md:flex md:flex-row justify-around items-center">
        <div className="col flex">
        <Link to={'/'}><div className='menu md:flex md:flex-row flex flex-col gap-1 items-center'><IoHomeOutline />Home</div></Link>
            <Link to={'/skills'}><div className='menu md:flex md:flex-row flex flex-col gap-1 items-center'><GoPerson />About</div></Link>
            <Link to={'/projects'}><div className='menu md:flex md:flex-row flex flex-col gap-1 items-center'><AiOutlineFundProjectionScreen />Projects</div></Link>
            <Link to={'/contact'}><div className='menu md:flex md:flex-row flex flex-col gap-1 items-center'><TiMessage />Contact</div></Link>
        </div>
        <div className="col flex justify-center items-center">
          <div className='relative md:my-8 mb-5 mt-3 footerText text-lg'>Copyright © {year} Smit Sojitra </div>
        </div>
        <div className="col relative">
          <ul class="flex social-icon gap-5 justify-center items-center">
            <li> <a href="mailto:smitsojitra.it21@scet.ac.in"  className='footerIcon opacity-75 transition-all duration-500 inline-block hover:translate-y-[-10px] text-[2rem]  hover:opacity-100' ><SiGmail/></a></li>
            <li> <a href="https://www.linkedin.com/in/smit-sojitra-a101922a6/" className='footerIcon opacity-75 transition-all duration-500 inline-block hover:translate-y-[-10px] text-[2rem]  hover:opacity-100' ><SiLinkedin /></a></li>
            <li> <a href="https://github.com/smit-sojitra"  className='footerIcon opacity-75 transition-all duration-500 inline-block hover:translate-y-[-10px] text-[2rem]  hover:opacity-100' ><SiGithub /></a></li>
            <li> <a href="https://www.instagram.com/smit._sojitra/" className='footerIcon opacity-75 transition-all duration-500 inline-block hover:translate-y-[-10px] text-[2rem]  hover:opacity-100' > <SiInstagram/></a></li>
          </ul>
           <div className="underline mt-6"><span></span></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer