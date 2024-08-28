import React from 'react'
import sunset from '../assets/sunset.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Landing() {
  return (
    <>
    <div className='p-5  align-items-center justify-content-center d-flex flex-column' style={{backgroundColor:"#fdc6ba"}}>
      <h1 className='text-light fw-bold mt-md-5 font1' style={{fontSize:'70px', color:"red"}} >EXPLOREO</h1>
      <p className='font2'>Discover new destinations with like-minded travelers using our app. Connect with companions who share your passion for adventure and create unforgettable memories together. Whether you're looking to share costs or just the journey, our app makes finding the perfect travel buddy easy and fun.</p>
      <Link to={'./logreg'}><button className='btn btn-warning'>Lets Go</button></Link>
    </div>
    <div> 
    <img src={sunset} alt="no-image" width='100%' />
    </div>

    <Footer/>
    </>
  )
}

export default Landing