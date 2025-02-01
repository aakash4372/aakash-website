import React, { useState } from "react";
import '../App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";

const cardsData = [
  {
    id: 1,
    title: "Myit",
    description: "MyIT Landing Page uses React js and Boostrap with Aos animation",
    category: "landing-page",
    details: "The MyIT landing website is a modern, responsive web application built using React.js for dynamic and interactive components. It incorporates Bootstrap to ensure a sleek, mobile-friendly design, with grid systems and pre-styled UI elements. Additionally, AOS (Animate on Scroll) is integrated to enhance user experience by providing smooth scroll-based animations, creating an engaging and visually appealing interface.",
    photo:`${process.env.PUBLIC_URL}/banner/image.png`,
    tools: ['Reac js','Bootstrap'],
    year:'2024',
    link:'https://github.com/aakash4372/my_it_website',
    projectLink: 'https://project-it.netlify.app'
  },
  {
    id: 2,
    title: "Library Management",
    description: "The Library Management web app uses MERN Npm and Bootstrap.",
    category: "webpage",
    details: "The Library Management web app utilizes the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, providing a full-stack solution for seamless data management and user interaction. It leverages various npm packages to add essential features like authentication, data validation, and API communication. Bootstrap is incorporated to create a responsive and user-friendly interface, ensuring compatibility across devices while streamlining the design process with pre-built components and layout options.",
    photo:`${process.env.PUBLIC_URL}/banner/book.png`,
    tools: ['Reac js','Node js','Express js','MongoDB','Bootstrap',],
    year:'2024',
    link:'https://github.com/aakash4372/project-2'
  },
  {
    id: 3,
    title: "House Cleaning",
    description: "A fantastic landing page.",
    category: "landing-page",
    details: "The basic house cleaning landing website utilizes the MERN stack with a React.js frontend to deliver an interactive and dynamic user experience. It leverages npm packages for additional functionality such as form validation, state management, and animations. The integration of Bootstrap ensures a clean, responsive layout, making the website adaptable to various screen sizes and enhancing the overall user interface.",
     photo:`${process.env.PUBLIC_URL}/banner/clean.png`,
    tools: ['React js','Bootstrap','AOS'],
    year:'2024',
    link:'https://github.com/aakash4372/clean-project',
    projectLink: 'https://clean-project-six.vercel.app'
  },
  {
    id: 4,
    title: "Landing-2",
    description: "A stunning landing page.",
    category: "landing-page",
    details: "Landing-2 is a basic template designed with HTML, CSS, and Bootstrap. It features AOS animation for smooth scrolling effects. This clean and responsive design enhances user experience.",
     photo:`${process.env.PUBLIC_URL}/banner/landing-2.png`,
    tools: ['HTML','CSS','AOS'],
    year:'2024',
    link:'https://github.com/aakash4372/my_it_website',
    projectLink: 'https://webistemaking.netlify.app'
  },
  
];

const CardFilter = () => {
  Aos.init()
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalData, setModalData] = useState(null);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards = selectedCategory === "all" ? cardsData : cardsData.filter((card) => card.category === selectedCategory);

  const handleCardClick = (card) => {
    setModalData(card);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="project" id="Project">
      <div className="text-center">
        <div className="Project-image-content container-lg py-5 mb-1">
          <div className="Project-img-text d-flex align-items-center justify-content-center gap-1 mb-2">
            <img src={`${process.env.PUBLIC_URL}/img/dot.png`} alt="logo-dot" />
            <p className="mb-1">Project</p>
          </div>
          <div className="Project-img-text-2 mb-1 d-flex align-items-center justify-content-center gap-1">
            <h3 className="mb-1">I've worked on diverse projects, from websites to web <span className="skill-span">apps.</span></h3>
          </div>
        </div>
      </div>

      <div className="container">
      <div className="d-flex justify-content-center gap-3 mb-4 project-card">
        <button className={`btn ${selectedCategory === "all" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => handleFilterChange("all")} >
          All
        </button>
        <button className={`btn ${selectedCategory === "webpage" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => handleFilterChange("webpage")} >
          Webpage
        </button>
        <button className={`btn ${selectedCategory === "landing-page" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => handleFilterChange("landing-page")} >
          Landing Page
        </button>
      </div>

      <div className="row">
  {filteredCards.map((card) => (
    <div className="col-md-6 col-lg-6 mb-1 project-card" key={card.id} onClick={() => handleCardClick(card)}>
      <div className="card-container">
        <div className="card-image">
          <img
            src={card.photo}
            alt={card.title} 
            className="card-img" 
          />
          <div className="card-overlay">
            <div className="card-text-container">
              <div className="card-text">{card.title}</div>
              <p className="card-year">{card.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



      {modalData && (
        <>
          <div className="modal-backdrop fade show"></div>

          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalData.title}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
              <img src={modalData.photo} alt="modaldata-photo"/>                
                <div className="modal-body">
                <div className="modaldata-tools mb-4">
                {modalData.tools && modalData.tools.map((tool, index) => (
                  <span key={index} className="badge">{tool}</span>
                ))}
              </div>
              <h5 className="modaldata-title">{modalData.title}</h5>
              <h6>{modalData.year}</h6>
              <p className="modaldata-text-p">{modalData.details}</p>
                </div>
                <div className="modal-footer">
                <a href={modalData.link} target="_blank" rel="noopener noreferrer">
                  <button type="button" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaGithub className="modal-btn-icon" style={{ marginRight: '8px' }} />Github Code
                  </button>
                </a>

                {modalData.projectLink && (
                  <a href={modalData.projectLink} target="_blank" rel="noopener noreferrer">
                  <button type="button" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TbWorldWww className="modal-btn-icon" style={{ marginRight: '8px' }} />Visit Site
                  </button>
                </a>
                )}
              </div>
              </div>
            </div>
          </div>
        </>
    )}

    </div>
    </div>
  );
};

export default CardFilter;
