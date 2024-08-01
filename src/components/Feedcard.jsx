import React from 'react'
import user from '../assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'


function Feedcard() {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column '>
    <div className='p-3 shadow card w-75 my-4' style={{backgroundColor:"#f0a88c"}}>
      <div className="row ">
        <div className="col-md-3 d-flex align-items-center justify-content-center flex-column">
          <img src={user} alt="no image" width={'50px'}/>
          <h5>Username</h5>
        </div>
        <div className="col-md-6 ">
          <div className="row border border-dark border-2 rounded p-3 ">
            <div className="col-md-4 align-items-center justify-content-center d-flex flex-column">
              <h5>Starting</h5>
              <p>1/1/2024</p>
            </div>
            <div className="col-md-4 align-items-center justify-content-center d-flex flex-column">
            <FontAwesomeIcon icon={faArrowsLeftRight} className='fa-3x'/>
            </div>
            <div className="col-md-4 align-items-center justify-content-center d-flex flex-column">
              <h5>Destination</h5>
              <p>1/1/2024</p>
            </div>
          </div>
          <div className="row mt-md-3">
              <div className="col-md-6 align-items-center justify-content-center d-flex">
                <h6>Est. Price</h6>
              </div>
              <div className="col-md-6 align-items-center justify-content-center d-flex">
                <h6>Expected People</h6>
              </div>
          </div>
        </div>
        <div className="col-md-3 align-items-center justify-content-center d-flex">
          <button className='btn btn-primary'>More Details</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Feedcard