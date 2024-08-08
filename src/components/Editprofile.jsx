import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import user from '../assets/user.png'

function Editprofile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button className='btn' style={{color:'white',backgroundColor:'#27192f'}} variant="primary" onClick={handleShow}>Edit Profile</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold'>Unveil Yourself</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center flex-column align-items-center'>
            <img src={user} alt="" width={'200px'}/>
            <h2 className='fw-bold'>Username</h2>
          </div>
          <div>
          <textarea name="Description" id="" className='form-control mt-3' rows={5} placeholder='Let us listen about you more'></textarea>
          <div className='mt-3 d-flex'>
            <h5>Sex:</h5>
            <div className="mb-3">
              <input type="radio"/>
            </div>
            <div className="mb-3">
            <input type="radio" />
            </div>
            <div className="mb-3">
            <input type="checkBox" />
            </div>
          </div>
          </div>
        </Modal.Body>
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
  );
}

export default Editprofile;