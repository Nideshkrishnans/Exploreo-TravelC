import React from 'react'
import dp from '../assets/dp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { borderRadius } from '@mui/system';


function Feedcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex align-items-center justify-content-center flex-column '>
    <div className='p-2 shadow card w-85 my-4' style={{backgroundColor:"white"}}>
      <div className="row ">
        <div className="col-md-3 d-flex align-items-center justify-content-center flex-column">
          <img src={dp} alt="no image" style={{width:'50px',borderRadius:'50%'}}/>
          <h6 className='mt-2'>Username</h6>
        </div>
        <div className="col-md-6 ">
          <div className="row rounded p-3 px-4 " style={{border:"#27192f 2px solid" }}>
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
          <button className='btn' style={{backgroundColor:'#27192f',color:'white'}} variant="primary" onClick={handleShow}>More Details</button>
        </div>
      </div>
    </div>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Feedcard