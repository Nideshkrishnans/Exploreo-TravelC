import { faInstagram, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div div className='p-5' style={{backgroundColor:"#27192f"}}>
    <div className="row">
      <div className="col-md-5 text-light">
        <h1>Exploreo</h1>
        <p>Discover new destinations with like-minded travelers using our app. Connect with companions who share your passion for adventure and create unforgettable memories together. Whether you're looking to share costs or just the journey, our app makes finding the perfect travel buddy easy and fun.</p>
      </div>

      <div className="col-md-3 d-flex justify-content-center align-items-center flex-column text-light" >
        <h1>Support</h1>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>New Registration</p>
      </div>

      <div className="col-md-4">
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <input type="text" placeholder='Email' className='form-control' />
          <button className='btn btn-warning ms-2 border-0'>Subscribe</button>
        </div>

        <div className='d-flex justify-content-around align-items-center mt-5 text-light'>
        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
        <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
        <FontAwesomeIcon icon={faThreads} className='fa-2x'/>
        <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>

        </div>
      </div>


    </div>
    </div>
  )
}

export default Footer