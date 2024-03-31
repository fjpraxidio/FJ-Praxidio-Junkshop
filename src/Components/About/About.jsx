import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'

const About = () => {
  return (
    <div className='about container'>
        <div className="about-left">
            <h3>ABOUT US</h3>
            <h2>Recycling Made Easy: Turn Trash into Cash!</h2>
            <p>Our mission is simple: to promote sustainable practices by offering a convenient platform for individuals and businesses to responsibly dispose of their recyclable materials. Whether you're a homeowner looking to declutter or a corporation seeking eco-friendly waste management solutions, we're here to streamline the recycling process for you.</p>
            <p>With 25+ years of experience in the recycling industry, our team at FJ PRAXIDIO JUNKSHOP possesses the expertise and dedication necessary to handle all types of recyclable materials effectively. We employ sorting and processing techniques to ensure maximum efficiency and minimal environmental impact.</p>
            <p>What sets us apart is our unwavering commitment to integrity and transparency. We offer fair and competitive prices for all recyclable materials, providing our customers with a hassle-free experience and peace of mind knowing that they're contributing to a cleaner, healthier planet.</p>
        </div>
        <div className="about-right">
            <img src={about_img} className='about-img' alt="" />
        </div>
      
    </div>
  )
}

export default About
