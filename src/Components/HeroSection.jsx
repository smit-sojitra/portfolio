import Button from './Button';
import Animation from './Animation'
import Typewriter from "typewriter-effect";
import HomeLogo from "../assets/home-main.svg"
import HireMeButton from './HireMeButton';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-container flex justify-center pb-32 items-center min-h-screen">
      <div className="hero-section flex flex-col items-center justify-center md:flex md:flex-row  lg:px-0 px-4">
        {/* <div className="fadded-text">John Doe</div> */}
        <div className="hero-section-left  flex w-[50%] flex-col justify-center">
          <Animation><div className="hero-section-heading text-[clamp(25px,5vw,45px)] font-normal">Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </div></Animation>
          <Animation>
            <div className="hero-section-heading w-[700px] flex text-[clamp(25px,5vw,45px)] leading-[45px] hero-section-sub-heading  text-center">
              I&apos;m
              <div className="ml-2 sm:ml-5 text-center text-[#3c5bb8] ">
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "Problem Solver",
                      "MERN Stack Developer",
                      "Open Source Contributor",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </div>
              {/* style={{display: 'inline-block', color:'#3c5bb8', margin:'0 1rem'}} */}
            </div></Animation>
          <Animation >
            <div className="flex items-center ">
              <div className="hero-section-desc text-wrap">
                I&apos;m a full stack developer and here is my portfolio website.Here you&apos;ll learn about my journy as a full stack developer.
              </div>

            </div>
          </Animation>

          {/* <div className="btn" id="">Hire me</div> */}
          <Animation>

            <div className="flex gap-4 btns items-center">
              <Button />
              <Link to={'/contact'}>
                <HireMeButton />
              </Link>
            </div>
          </Animation>

        </div>
        <div className="hero-section-right flex justify-center">
          <Animation>
            <img src={HomeLogo} className='max-h-[450px]'></img>
          </Animation>
        </div>
      </div>
    </div>

  )
}

export default HeroSection