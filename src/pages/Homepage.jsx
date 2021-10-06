import React from 'react'
import Banner from '../components/Banner'
import Benefits from '../components/Benefits'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'


const Homepage = () => {
    return (
        <div>
          <Navbar />
          <Benefits/>
          <Banner />
          <Categories />
          <Newsletter />
          <Products />
          <Footer />
        </div>
    )
}

export default Homepage
