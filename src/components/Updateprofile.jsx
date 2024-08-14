import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import user from '../assets/user.png';
import Form from 'react-bootstrap/Form';
import { updateProfile } from '../../server/allApi';

function Updateprofile() {
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"))
  const [userProfileId,setuserProfileId]=useState(sessionStorage.getItem("userProfileId"))


  const [show, setShow] = useState(false);
  const [ editUser , setEditUser] = useState({
    userName: userName,
    bio: "",
    phonenum: "",
    gender: "",
    age: "",
    education: "",
    location: "",
    language: "",
    drinking: "",
    smoking: "",
    relationship: "",
  })
   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function handleUpdate  (){

    const id = userProfileId
    const reqBody = editUser
    
    const result = await updateProfile(id,reqBody)

    console.log(result);
    setShow(false)
  }



  return (
    <>
    <button className='btn' style={{color:'white',backgroundColor:'#27192f'}} variant="primary" onClick={handleShow}>Edit Profile</button>

      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold'>
          <div className='d-flex'>
            <img src={user} alt="" width={'30px'} height={'30px'} />
            <h6>{userName}</h6>
          </div>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='w-100'>
          <textarea name="" placeholder='Tell about Yourself' rows={5} className='form-control' onChange={(e)=>setEditUser({...editUser,bio:e.target.value})}></textarea>
          </div>

          <div className="row p-3">
            <div className="col-md-6">

              <input type="text" placeholder='Phone Number' className='form-control m-2' onChange={(e)=>setEditUser({...editUser,phonenum:e.target.value})}/>
              
              <div className='w-100 d-flex align-items-center justify-content-center m-2'>
              <Form.Select aria-label="Default select example" className='me-2' onChange={(e)=>setEditUser({...editUser,gender:e.target.value})}>
                <option>Gender</option>
                <option >Male</option>
                <option >Female</option>
                <option >Transgent</option>
              </Form.Select>

              <input type="text" placeholder='Age' className='form-control' onChange={(e)=>setEditUser({...editUser,age:e.target.value})} />
              </div>

              <input type="text" placeholder='Location' className='form-control m-2' onChange={(e)=>setEditUser({...editUser,location:e.target.value})}/>

              <Form.Select aria-label="Default select example" className='m-2' onChange={(e)=>setEditUser({...editUser,education:e.target.value})} >
                <option>Education Level</option>
                <option >High School</option>
                <option >Trade/Tech School</option>
                <option >In College</option>
                <option >Undergraduate Degree</option>
                <option >In Grade School</option>
                <option >Graduate Degree</option>
              </Form.Select>


            </div>
            <div className="col-md-6" >

            <input type="text" placeholder='Language' className='form-control m-2' onChange={(e)=>setEditUser({...editUser,language:e.target.value})}/>

            <Form.Select aria-label="Default select example" className='m-2' onChange={(e)=>setEditUser({...editUser,drinking:e.target.value})} >
                <option>Drinking</option>
                <option>Socially</option>
                <option>Never</option>
                <option>Frequently</option>
                <option>Sober</option>
              </Form.Select>

              <Form.Select aria-label="Default select example" className='m-2' onChange={(e)=>setEditUser({...editUser,smoking:e.target.value})}>
                <option>Smoking</option>
                <option>Socially</option>
                <option>Regularly</option>
                <option>Never</option>
              </Form.Select>


              <Form.Select aria-label="Default select example" className='m-2' onChange={(e)=>setEditUser({...editUser,relationship:e.target.value})}>
                <option>Relationship status</option>
                <option>Single</option>
                <option>Committed</option>
                <option>Married</option>
                <option>Divorced</option>
              </Form.Select>


            </div>
          </div>



         
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Updateprofile;