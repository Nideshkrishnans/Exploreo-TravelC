import React, { useEffect, useState } from 'react'
import Feedcard from '../components/Feedcard'
import UserProfile from '../components/UserProfile'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Postfeed from '../components/Postfeed'
import { getAllHostApi, getAllPostApi } from '../../server/allApi'

function Profile() {
  const [allPostDetails,setAllPostDetails]=useState([])
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"))
  const [allHostDetails,setAllHostDetails]=useState([])




  const getAllHostDetails=async()=>{
    const result= await getAllHostApi()
   /*  console.log(result); */
    setAllHostDetails(result.data)
    
  }

  const getAllPostDetails=async()=>{
    const result= await getAllPostApi()
   /*  console.log(result); */
   setAllPostDetails(result.data)
    
  }


  useEffect(()=>{getAllHostDetails()},[])
  useEffect(()=>{getAllPostDetails()},[])

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
              <Tabs defaultActiveKey="My Post" id="uncontrolled-tab-example" className="my-3 ">
                <Tab eventKey="My Activity" title="My Activity">
                {allHostDetails.filter(item=>item.userName==userName)?
                    allHostDetails?.filter(item=>item.userName==userName).map((item)=>(<Feedcard trips={item} />)) : <p>No Posts Available</p> }
                </Tab>
                <Tab eventKey="My Post" title="My Post">
                  {allPostDetails.filter(item=>item.userName==userName)?
                    allPostDetails?.filter(item=>item.userName==userName).map((item)=>(<Postfeed moment={item} />)) : <p>No Posts Available</p> }
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

export default Profile