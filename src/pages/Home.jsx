import React from 'react'
import Feedcard from '../components/Feedcard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Postfeed from '../components/Postfeed'
import  { useState, lazy, Suspense } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Search from '../components/Search'

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
        <div className="row w-100">
          <div className="col-md-5 p-4 d-flex justify-content-center align-items-center bg-light rounded" >
          <div className="hytcard card rounded d-flex justify-content-center align-items-center" id='hytcard' >
            <div className='' >
              <h3 className='text-light'>Mood for a trip?</h3>
              <button className='btn btn-light w-100' variant="primary" onClick={handleShow}>Host a Trip</button>
            </div>
            <div>
              <button className='btn btn-light mt-3' onClick={() => handleButtonClick('Feedcard')} id='hytbutton'>Live events</button>
            </div>
            <div>
              <button className='btn btn-light mt-3' id='hytbutton'>Upcoming</button>
            </div>
            <div>
              <button className='btn btn-light mt-3' onClick={() => handleButtonClick('Postfeed')} id='hytbutton'>Feed</button>
            </div>
            
          </div>
          </div>
          <div className="col-md-7" id='homeleft' style={{overflowY:'scroll', height:'100vh'}}>

            <div className='my-4 '>
            <Search/>
            </div>

             {component === 'Feedcard' ? <Feedcard /> : <Postfeed />}
   
          
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




        </div>   

        <Footer/>
        
      </>

  )
}

export default Home