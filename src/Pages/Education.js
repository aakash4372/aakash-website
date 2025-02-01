import React from 'react'
import '../App.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";
import { GiSchoolBag } from "react-icons/gi";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Education() {
  Aos.init();
  return (
    <div className='Education mb-5' id='Education'>
      <div className="text-center">
      <div className="Education-image-content container-lg py-5 mb-1">
          <div className="Education-img-text d-flex align-items-center justify-content-center gap-1 mb-1">
            <img src={`${process.env.PUBLIC_URL}/img/dot.png`} alt="logo-dot" />
            <p className="mb-1">Education</p>
          </div>
          <div className="Education-img-text-2 mb-4 d-flex align-items-center justify-content-center gap-1">
            <h3 className="mb-4">My educational details are as <span className="skill-span">follows.</span></h3>
          </div>
        </div>
      </div>
        <div>
        <VerticalTimeline>

            <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'linear-gradient(90deg, #2196F3, #21CBF3)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #2196F3' }} date="Apr.2024 - Aug.2024" iconStyle={{ background: 'linear-gradient(90deg, #2196F3, #21CBF3', color: '#fff' }} icon={<IoCodeSlash />} data-aos="fade-up">
            <h4 className="vertical-timeline-element-title mb-2">Myit Career</h4>
            <h4 className="vertical-timeline-element-subtitle">MERN Full Stack Development</h4>
            <p>Through a MERN full-stack development course, I've mastered MongoDB, Express.js, React.js, and Node.js. I excel in building end-to-end applications with robust back-end systems and responsive front-end designs. Hands-on projects have fueled my passion for creating scalable, user-focused digital solutions.</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement className="vertical-timeline-element--work"  contentStyle={{ background: 'linear-gradient(90deg, #673AB7, #9C27B0)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #673AB7' }} date="2021 - 2024" iconStyle={{ background: 'linear-gradient(90deg, #673AB7, #9C27B0', color: '#fff' }} icon={<IoSchoolSharp />} data-aos="fade-up">
            <h4 className="vertical-timeline-element-title mb-2">Raak Arts & Science College</h4>
            <h4 className="vertical-timeline-element-subtitle">Bachelor's in Computer Application - BCA</h4>
            <p>As a BCA graduate, I possess strong analytical and technical skills, fueled by a passion for innovation. My academic journey has bridged theoretical knowledge and practical applications, enabling me to craft efficient solutions. This foundation makes me a versatile professional in the dynamic IT industry.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'linear-gradient(90deg, #4CAF50, #8BC34A)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #4daf50' }} date="2020 - 2021" iconStyle={{ background: 'linear-gradient(90deg, #4CAF50, #8BC34A)', color: '#fff' }} icon={<LuSchool />} data-aos="fade-up">
            <h4 className="vertical-timeline-element-title mb-2">Presidency Higher Secondary school </h4>
            <h4 className="vertical-timeline-element-subtitle">HSC- XII(std) <span>(Commerce)</span></h4>
            <p>I've embarked on a dynamic academic journey that has cultivated critical thinking and a deep curiosity for learning. Through dedication and adaptability, I've developed essential skills that transcend disciplines, equipping me to embrace future challenges and opportunities.</p>
            </VerticalTimelineElement>  

            <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'linear-gradient(90deg, #f63900,rgb(166, 73, 45))', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid #f63900' }} date="2019 - 2020" iconStyle={{ background: 'linear-gradient(90deg,rgb(246, 57, 0),rgb(166, 73, 45))', color: '#fff' }} icon={<GiSchoolBag />} data-aos="fade-up">
            <h4 className="vertical-timeline-element-title mb-2">Immaculate Heart of Mary's Govt. Aided High School</h4>
            <h4 className="vertical-timeline-element-subtitle">SSLC - Xth(std)</h4>
            <p>My educational journey began with enthusiasm, establishing a strong foundation in key subjects and time management. This pivotal year was crucial in shaping my academic and personal growth, preparing me for the path ahead.</p>
            </VerticalTimelineElement>  

        </VerticalTimeline>

        </div>
    </div>
  )
}

export default Education;