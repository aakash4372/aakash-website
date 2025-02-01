import React from 'react';
import CountUp from 'react-countup';
import { FiCheckSquare } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

const ProfileSection = () => {
  AOS.init();

  return (
    <div className="my-5 container-lg About" id='About' data-aos="fade-up" data-aos-duration="1000">
      <Row>
        <Col lg={6} className='about-image-container pe-md-5'> 
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/image (3).png`} style={{ width: '100%', borderRadius: '8px' }} />
        </Col>
        
        <Col lg={6} className='about-content-2'>
          <div className="mt-3 d-flex align-items-center gap-1 ">
            <img src={`${process.env.PUBLIC_URL}/img/dot.png`} alt="logo-dot" />
            <p className="mb-1">About Us</p>
          </div>

          <h3>Hello, I'm Aakash</h3>
          <h3 className="mb-4">
            MERN Stack <span className="dev">Developer</span>
          </h3>

          <p className="mb-4">
            Enthusiastic MERN Stack Developer with foundational knowledge in
            MongoDB, Express.js, React.js, and Node.js. Passionate about
            building scalable and user-friendly web applications, I am a quick
            learner with a collaborative mindset. Eager to apply my technical
            skills to deliver innovative solutions and contribute to the growth
            and success of the organization as I begin my professional journey.
          </p>
     

          <div className="row justify-content-between">
            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center gap-2">
              <div className="about-tick">
                <img src={`${process.env.PUBLIC_URL}/img/tick.png`} alt="tick"  />
              </div>
              <div className="about-tick-text text-start">
                <h4 className="mb-1">
                  <CountUp start={0} end={6} duration={13.6} suffix=' +' />
                </h4>
                <p className='mb-0'>Complete Project</p>
              </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center gap-2">
              <div className="about-tick">
                <img src={`${process.env.PUBLIC_URL}/img/time.png`} alt="tick"  />
              </div>
              <div className="about-tick-text text-start">
                <h4 className="mb-1">
                  <CountUp start={0} end={4} duration={10.6} separator=" " suffix=" Months" />
                </h4>
                <p className='mb-0'>Work Experience (Intern)</p>
              </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="row justify-content-between">
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="tick-logo">
                    <FiCheckSquare style={{ fontSize: '24px', color: '#ff6b01' }} />
                  </div>
                  <div className="tick-logo-text">
                    <p className="mb-0">Work simple and clean design</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="tick-logo">
                    <FiCheckSquare style={{ fontSize: '24px', color: '#ff6b01' }} />
                  </div>
                  <div className="tick-logo-text">
                    <p className="mb-0">Web Design Full stack</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="tick-logo">
                    <FiCheckSquare style={{ fontSize: '24px', color: '#ff6b01' }} />
                  </div>
                  <div className="tick-logo-text">
                    <p className="mb-0">New idea and user-friendly design</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="tick-logo">
                    <FiCheckSquare style={{ fontSize: '24px', color: '#ff6b01' }} />
                  </div>
                  <div className="tick-logo-text">
                    <p className="mb-0">Unlimited Revisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div>
          <Button variant="warning" href={`${process.env.PUBLIC_URL}/aakash.pdf`} target="_blank"  rel="noopener noreferrer"  className='mt-3 cv-button d-flex align-items-center'>Check Resume  {''}<TbFileCv className='file-icon'/></Button>
          </div>

        </Col>
      </Row>
      
    </div>
  );
};

export default ProfileSection;
