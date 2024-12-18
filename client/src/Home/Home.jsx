import React from 'react'
import Logo from "../Assets/Logos/KL logotype White.png"
import Hero from "./Hero/Hero"
import About from "./About/About"
import CTA from "./CTA Section/CTA"
import Portfolio from "./Portfolio/Portfolio"
import Clients from "./Clients/Clients"
import Contact from "./Contact/Contact"
import Blogs from "./Blogs/Blogs"
import Newsletter from './Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div style={{backgroundColor: "black"}}>
        <Hero/>
        <About/>
        <CTA/>
        <Portfolio/>
        <Clients/>
        <Contact/>
        <Newsletter/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Home