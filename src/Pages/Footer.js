import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css'
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer" style={{ backgroundColor: '#1a1a1a', paddingTop: '80px', paddingBottom: '60px', color: 'white' }}>
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="container-lg container-md">
            <Row className="d-flex flex-column flex-lg-row justify-content-center">
              <Col xs={12} sm={6} lg={4} className="mt-5 mt-lg-0">
                <div className="footer-col-one">
                  <img src={`${process.env.PUBLIC_URL}/icon/aa.png`} className="footer-logo" alt="footer logo" style={{ width: '80px' }} />
                  <p className="text-white mb-3" style={{ lineHeight: '1.7' }}>
                    Welcome to my portfolio site! I am passionate about crafting
                    innovative designs and developing solutions that bring ideas to life.
                    Feel free to connect with me or explore more about my work.
                  </p>
                  <a href="mailto:aakashaakash0013@gmail.com"  className="text-white"  style={{ fontWeight: '500', textDecoration: 'none' }} >
                    aakashaakash0013@gmail.com
                  </a>
                </div>
              </Col>
              <Col xs={6} sm={6} lg={2} className="mt-5 mt-lg-0">
                <h4 className="text-white" style={{ fontWeight: '500' }}>Explore Link</h4>
                <div className="footer-col-links">
                  <ul className="list-unstyled">
                    <li><a href="#About" className="text-white">About</a></li>
                    <li><a href="#skills" className="text-white">Skills</a></li>
                    <li><a href="#Project" className="text-white">Project</a></li>
                    <li><a href="#Education" className="text-white">Education</a></li>
                  </ul>
                </div>
              </Col>
              <Col xs={6} sm={6} lg={2} className="mt-5 mt-lg-0">
                <h4 className="text-white" style={{ fontWeight: '500' }}>My Services</h4>
                <div className="footer-col-links">
                  <ul className="list-unstyled">
                    <li><a href="services.html" className="text-white">Full-Stack Development</a></li>
                    <li><a href="services.html" className="text-white">React.js Frontend</a></li>
                    <li><a href="services.html" className="text-white">Node.js Backend</a></li>
                    <li><a href="services.html" className="text-white">MongoDB Integration</a></li>
                  </ul>
                </div>
              </Col>
              <Col sm={6} lg={4} className="mt-5 mt-lg-0">
                <h4 className="text-white" style={{ fontWeight: '500' }}>Follow me</h4>
                <div className="footer-social-media">
                  <ul className="list-unstyled d-flex flex-column flex-sm-row mb-3">
                    <li className="me-3 mb-3 mb-md-0">
                      <a href="https://github.com/aakash4372" className="text-white" target='_blank' rel="noreferrer">
                        <div className="orange-bg-icon">
                          <FaGithub size={20} />
                        </div>
                      </a>
                    </li>
                    <li className="me-3 mb-3 mb-md-0">
                      <a href="https://www.linkedin.com/in/aakash4372" className="text-white" target='_blank' rel="noreferrer">
                        <div className="orange-bg-icon">
                          <FaLinkedinIn size={20} />
                        </div>
                      </a>
                    </li>
                    <li className="me-3 mb-3 mb-md-0">
                      <a href="https://wa.me/919952787198" className="text-white" target='_blank' rel="noreferrer">
                        <div className="orange-bg-icon">
                          <FaWhatsapp size={20} />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Address and Phone */}
                <div className="footer-contact-info mt-4">
                  <div className="d-flex align-items-center mb-4">
                    <FaMapMarkerAlt size={20} className="me-2" />
                    <span>pondicherry</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaPhone size={20} className="me-2" />
                    <a href="tel:+919952787198" className="text-decoration-none">
                      +91 9952787198
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="footer-bottom" style={{ backgroundColor: '#111', paddingTop: '30px', paddingBottom: '20px' }}>
          <div className="container-lg container-md">
            <Row className="d-flex flex-column flex-lg-row justify-content-center">
              <Col className="text-center">
                <p className="text-white" style={{ fontSize: '14px' }}>
                  <span>Designed by</span> Aakash ©{new Date().getFullYear()}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
