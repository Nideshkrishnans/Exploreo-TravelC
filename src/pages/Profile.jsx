import React from 'react'
import Feedcard from '../components/Feedcard'
import UserProfile from '../components/UserProfile'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Profile() {
  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className='row'>
        <div className="col-md-5">
          <UserProfile/>
        </div>
        <div className="col-md-7">
          <div className="container">
            <div>
              <Feedcard/>
              <Feedcard/>
              <Feedcard/>
              <Feedcard/>
              <Feedcard/>
              <Feedcard/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Profile