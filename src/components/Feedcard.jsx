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
          <Modal.Title className='text-center fw-bold'>Let's know more</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
          <p className='border border-1 rounded'>Starting</p>
          </div>
          <div className="mb-3">
          <input type="text" placeholder='Destination' className='form-control'/>
          </div>
          <div className="mb-3">
          <input type="text" placeholder='Date' className='form-control'/>
          </div>
          <div className="mb-3">
            <textarea name="Description" id="" className='form-control' rows={9}></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>

          <div className='d-flex'>
            <h6 className='fw-bold mt-2 me-3'>Have a chat with them ?</h6>
            <Button variant="primary" onClick={handleClose}>
              Chat
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Feedcard