import React from 'react'
import Feedcard from '../components/Feedcard'
import UserProfile from '../components/UserProfile'
import Activity from '../components/Activity'
import Footer from '../components/Footer'

function Profile() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className="col-md-5">
          <UserProfile/>
          

        </div>
        <div className="col-md-7" style={{overflowY:'scroll',height:'100vh'}}>

          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
      
          
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Profile