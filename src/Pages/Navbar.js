import { useState } from 'react';
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoCloseSharp } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbarsection() {
  const [iconchange, seticonchange] = useState(false);
  const [ismenuchange, setismenuchange] = useState(false);

  const handleclickmenu =()=>{
    setismenuchange(false);
    seticonchange(false);
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-background"
      expanded={ismenuchange}
    >
      <div className="container-lg">
      <Navbar.Brand href="#logo">
        <img
          src={`${process.env.PUBLIC_URL}/img/logo.png`}
          width="120"
          height="110"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {seticonchange(!iconchange);setismenuchange(!ismenuchange)}}
        className="toggle-icon"
      >
        <span className={`icon-trans ${iconchange ? "icon-close" : "icon-menu"}`}>
          {iconchange ? (
            <IoCloseSharp size={40} />
          ) : (
            <IoReorderThreeOutline size={40} />
          )}
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto nav-gap gap-4 ">
          <Nav.Link href="#About" className="custom-active" onClick={handleclickmenu}>
            About
          </Nav.Link>
          <Nav.Link href="#skills"  className="custom-active" onClick={handleclickmenu}>
            Skills
          </Nav.Link>
          <Nav.Link href="#Project" className="custom-active" onClick={handleclickmenu}>
            Project
          </Nav.Link>
          <Nav.Link href="#Education" className="custom-active" onClick={handleclickmenu}>
            Education
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navbarsection;
