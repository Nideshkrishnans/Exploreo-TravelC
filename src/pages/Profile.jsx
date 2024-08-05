import React from 'react'
import Feedcard from '../components/Feedcard'
import UserProfile from '../components/UserProfile'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Postfeed from '../components/Postfeed'

function Profile() {
  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className='row'>
        <div className="col-md-5">
          <UserProfile/>
        </div>
        <div className="col-md-7" style={{overflowY:'scroll', height:'100vh'}}>
          <div className="container">
            <div>
            <Tabs
      defaultActiveKey="My Post"
      id="uncontrolled-tab-example"
      className="my-3 "
    >
      <Tab eventKey="My Activity" title="My Activity">
        <Feedcard/>
      </Tab>
      <Tab eventKey="My Post" title="My Post">
        <Postfeed/>
      </Tab>
      
    </Tabs>
            
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