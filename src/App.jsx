import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Products from './Components/Products/Products'
import Location from './Components/Location/Location'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Title subTitle='Products' title='What We Offer'/>
        <Products/>
        <Title subTitle='Location' title='Where can you find us?'/>
        <Location/>
        <Title subTitle='Contact Us' title='Give us a Call'/>
        <Contact/>
        <div className='container'>
        <Footer/>
        </div>
      </div>
  )
}

export default App
