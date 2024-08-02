import React from 'react'
import Feedcard from '../components/Feedcard'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Home() {
  return (
    
      <>
      <Header/>
        <div className="row w-100 p-4 ">
          <div className="col-md-3 p-4"  style={{height:'50vh'}}>
          <div className="hytcard card d-flex justify-content-center align-items-center ms-md-5" id='hytcard' >
            <div className='p-5' style={{backgroundColor:'coral'}}>
              <h3>Mood for a trip?</h3>
              <button className='btn btn-success w-100'>Host a Trip</button>
            </div>
            <div>
              <h3>Live events</h3>
            </div>
            <div>
              <h3>Upcoming</h3>
            </div>
            <div>
              <h3>Feed</h3>
            </div>
            
          </div>
          </div>
          <div className="col-md-9 d-flex flex-column justify-content-center">
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
        
      </>
  )
}

export default Home