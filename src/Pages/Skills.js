import React from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


const SkillsSection = () => {
  AOS.init();
  return (
    <div className="skills-section" id='skills'>
      <div className="container-lg">
        <div className="skills-image-content container-lg py-5 mb-1">
          <div className="skills-img-text d-flex align-items-center gap-1 mb-1">
            <img src={`${process.env.PUBLIC_URL}/img/dot.png`} alt="logo-dot" />
            <p className="mb-1">Skills</p>
          </div>
          <div className="skills-img-text-2 mb-4">
            <h3 className="mb-4">Here are some of the Skills I have <span className="skill-span">learned.</span></h3>
          </div>
        </div>
        <Row className="equal-height">
          <Col md={6} className="mb-4">
            <div className="p-4 skill-box"  style={{ border: '2px solid #343434', borderRadius: '10px' }}  data-aos="zoom-in" data-os-duration='13000'>
              <h3 className="text-center mb-4">Frontend / <span className="dev">Backend</span></h3>
              <div className="d-flex flex-wrap justify-content-center gap-5">
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/react.png`} alt="React" style={{ width: '55px', height: '55px' }} />
                  <p>React js</p>
                </div>
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/node.png`} alt="Node.js" style={{ width: '55px', height: '55px' }} />
                  <p>Node.js</p>
                </div>
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/express.png`} alt="Express" style={{ width: '55px', height: '55px' }} />
                  <p>Express</p>
                </div>
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/mongodb.png`} alt="MongoDB" style={{ width: '55px', height: '55px' }} />
                  <p>MongoDB</p>
                </div>
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/bootstrap.png`} alt="Bootstrap" style={{ width: '55px', height: '55px' }} />
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="mb-5">
            <div className="p-4 skill-box"  style={{ border: '2px solid #343434', borderRadius: '10px' }}  data-aos="zoom-in" data-os-duration='13000'>
              <h3 className="text-center mb-4">Other <span className="dev">Skills</span></h3>
              <div className="d-flex flex-wrap justify-content-center gap-5">
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/git.png`} alt="Git" style={{ width: '55px', height: '55px' }} />
                  <p>Git</p>
                </div>
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/github.png`} alt="GitHub" style={{ width: '55px', height: '55px' }} />
                  <p>GitHub</p>
                </div>
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/netlify.png`} alt="Netlify" style={{ width: '55px', height: '55px' }} />
                  <p>Netlify</p>
                </div>
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/vscode.png`} alt="VS Code" style={{ width: '55px', height: '55px' }} />
                  <p>VS Code</p>
                </div>
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/icon/postman.png`} alt="postman" style={{ width: '55px', height: '55px' }} />
                  <p>Postman</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SkillsSection;
