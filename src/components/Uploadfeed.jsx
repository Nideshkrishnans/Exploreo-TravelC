import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postfeedApi } from '../../server/allApi';

function Uploadfeed({setAddPostStatus}) {
  const [show, setShow] = useState(false);
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"))

  const [feed, setFeed] = useState({
    userName:`${userName}`,
    comment:""
  })
  //console.log(feed);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUploadFeed = async(e) =>{
    e.preventDefault()
    const {userName , comment} =feed 
    if(!userName || !comment){
      alert ('please add your comments')
    }
    else{
      const result = await postfeedApi(feed)
      //console.log(result);
      alert ('your comments added successfully')
      setAddPostStatus(result.data)
      setFeed({
        userName:`${userName}`,
        comment:""}
      )
      setShow(false)
    }

  }

  const handleClose1=()=>{
    setFeed(
      {
        userName:`${userName}`,
        comment:""
      }
    )
  }

  return (
    <>
    <button className='btn ms-3'style={{color:'white',backgroundColor:'#27192f'}} variant="primary" onClick={handleShow}>Upload post</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold'>Moment of the Day</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <textarea name="Description" id="" className='form-control' rows={9} placeholder='Share your moments here' onChange={(e)=>setFeed({...feed,comment:e.target.value})} value={feed.comment}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            DISCARD
          </Button>
          <Button variant="primary" onClick={handleUploadFeed}>
            POST
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Uploadfeed;