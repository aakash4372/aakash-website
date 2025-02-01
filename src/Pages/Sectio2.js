import React from 'react';
import './Header.css'
import { Typewriter } from "react-simple-typewriter";
import { Button } from 'react-bootstrap';
import { TbFileCv } from "react-icons/tb";

function Header() {
  return (
    <div className='section2'>
        <div className="particleOne mt-1">
        <img src={`${process.env.PUBLIC_URL}/img/particleOne.png`} alt="log"/>
      </div>
        <div className="container-lg d-flex flex-column flex-md-row ">

            <div className="content-2 col-md-6 order-1 order-md-2 text-center text-md-end mb-4 mb-md-0 image-container">
                <img src={`${process.env.PUBLIC_URL}/img/image2.png`} alt="Profile" className="img-fluid profile-picture" style={{width: '100%'}}/>
            </div>


            <div className="content-1 col-md-6 order-2 order-md-1 text-start mb-4 mb-md-0">
                <div className="mt-3 d-flex align-items-center gap-1 ">
                    <img src={`${process.env.PUBLIC_URL}/img/dot.png`} alt="logo-dot" />
                    <p className="mb-1">I'm MERN Developer</p>
                </div>
                <h3 className="mb-4">
                    Creative Design and Web {""} <span className="typewriter">
                    <Typewriter words={["Design", "Solution"]} loop={true} cursor cursorStyle="" typeSpeed={100} deleteSpeed={30} delaySpeed={1000} /></span>
                </h3>
                <p className='content-p'>A skilled MERN Stack developer with a strong portfolio, passionate about staying updated on full-stack technologies. Collaborative and committed to building scalable, high-quality web applications, you thrive in dynamic teams. Eager to contribute creativity and bring innovative, end-to-end solutions to life.</p>

                <Button variant="warning" className='mt-3 cv-button d-flex align-items-center' href={`${process.env.PUBLIC_URL}/aakash-resume.pdf`} target="_blank"  rel="noopener noreferrer">Check Resume  {''}<TbFileCv className='file-icon'/></Button>
            </div>
            
        </div>
        <div className="particleTwo">
        <img src={`${process.env.PUBLIC_URL}/img/two.png`} alt="log"/>
      </div>
    </div>
  );
}

export default Header;
