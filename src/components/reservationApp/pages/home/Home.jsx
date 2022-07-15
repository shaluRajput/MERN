import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  )
}

export default Home