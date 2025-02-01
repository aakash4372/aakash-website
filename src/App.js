import React from 'react'
import './App.css'
import Navbarsection from './Pages/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Pages/Sectio2'
import ProfileSection from './Pages/About'
import SkillsSection from './Pages/Skills'
import CardFilter from './Pages/Project'
import Education from './Pages/Education'
import Footer from './Pages/Footer'
import ScrollIndicator from './Pages/Scroll'

export default function App() {
  return (
    <div>
      <Navbarsection/>
      <Header/>
      <ProfileSection/>
      <SkillsSection/>
      <CardFilter/>
      <Education/>
      <Footer/>
      <ScrollIndicator/>
      
    </div>
  )
}
