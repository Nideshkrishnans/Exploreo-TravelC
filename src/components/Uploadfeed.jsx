import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Uploadfeed() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button className='btn ms-3'style={{color:'white',backgroundColor:'#27192f'}} variant="primary" onClick={handleShow}>Upload post</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold'>Moment of the Day</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <textarea name="Description" id="" className='form-control' rows={9} placeholder='Share your moments here'></textarea>
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

export default Uploadfeed;