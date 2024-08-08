import React from 'react'
import Feedcard from '../components/Feedcard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Postfeed from '../components/Postfeed'
import  { useState, lazy, Suspense } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/* const ComponentA = lazy(() => import('../components/Feedcard'));
const ComponentB = lazy(() => import('../components/Postfeed')); */



function Home() {
  const [component, setComponent] = useState('Feedcard');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = (componentName) => {
    setComponent(componentName);
  };

  return (
    
      <>
      <Header/>
        <div className="row w-100 p-4 ">
          <div className="col-md-5 p-4 d-flex justify-content-center align-items-center"  style={{height:'50vh'}}>
          <div className="hytcard card d-flex justify-content-center align-items-center ms-md-5" id='hytcard' >
            <div className='p-5' style={{backgroundColor:'coral'}}>
              <h3>Mood for a trip?</h3>
              <button className='btn btn-success w-100' variant="primary" onClick={handleShow}>Host a Trip</button>
            </div>
            <div>
              <a onClick={() => handleButtonClick('Feedcard')}>Live events</a>
            </div>
            <div>
              <button className='btn btn-outkine-light'>Upcoming</button>
            </div>
            <div>
              <a onClick={() => handleButtonClick('Postfeed')}>Feed</a>
            </div>
            
          </div>
          </div>
          <div className="col-md-7" style={{overflowY:'scroll', height:'100vh'}}>

             {component === 'Feedcard' ? <Feedcard /> : <Postfeed />}
   
          
          </div>

          <Modal show={show} onHide={handleClose} size='md'>
        <Modal.Header closeButton>
          <Modal.Title>It's your turn to show up!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center flex-column align-items-center'>
          <div className="mb-3 w-100 d-flex justify-content-center flex-column align-items-center">
            <input type="text" placeholder='title' className='form-control w-100'/>
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center w-100">
          <input type="text" placeholder='Starting point' className='form-control me-2'/>
          <input type="text" placeholder='Destination' className='form-control'/>
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center w-100">
          <input type="date" placeholder='start date' className='form-control me-2'/>
          <input type="date" placeholder='end Date' className='form-control'/>
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center w-100">
          <input type="text" placeholder='Estd. Price in rupees' className='form-control me-2'/>
          <input type="text" placeholder='no.of people' className='form-control'/>
          </div>
          <div className="mb-3 w-100">
         <textarea name="" placeholder='Describe your trip' rows={5} className='form-control'></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="success" onClick={handleClose}>
            Host
          </Button>
        </Modal.Footer>
      </Modal>




        </div>   

        <Footer/>
        
      </>

  )
}

export default Home