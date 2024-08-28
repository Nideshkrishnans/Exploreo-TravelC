import React, { useEffect } from 'react'
import Feedcard from '../components/Feedcard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Postfeed from '../components/Postfeed'
import  { useState, lazy, Suspense } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Search from '../components/Search'
import { getAllPostApi, hostApi } from '../../server/allApi'
import { getAllHostApi } from '../../server/allApi';


/* const ComponentA = lazy(() => import('../components/Feedcard'));
const ComponentB = lazy(() => import('../components/Postfeed')); */



function Home() {
  const [addHostStatus,setAddHostStatus]=useState([])
  const [deleteHostStatus,setDeleteHostStatus]=useState([])
  const [deletePostStatus,setDeletePostStatus]=useState([])

  const [component, setComponent] = useState('Feedcard');
  const [show, setShow] = useState(false);
  const [userName,setUserName]=useState(sessionStorage.getItem("userName"))
  const [allHostDetails,setAllHostDetails]=useState([])
  const [allPostDetails,setAllPostDetails]=useState([])



  const[hostDetails, setHostDetails]=useState({
    userName:`${userName}`,
    title:"",
    startingpoint:"",
    destination:"",
    startdate:"",
    enddate:"",
    price:"",
    people:"",
    number:"",
    description:""
  })
  //console.log(hostDetails);
  

  const handleClose = () => {setShow(false);handleClose1()}
  const handleShow = () => setShow(true);

  const handleButtonClick = (componentName) => {
    setComponent(componentName);
  };

  const handleAdd= async (e)=>{
    e.preventDefault()
    const {userName , title, startingpoint,destination,startdate,enddate,price,people,number,description}=hostDetails
    if(!userName || !title|| !startingpoint || !destination|| !startdate || !enddate|| !price|| !people|| !number|| !description){
      alert(`please fill the form completely`)
      
    }
    else{
      const result = await hostApi(hostDetails)
      alert('successfully hosted a trip')
      setAddHostStatus(result.data)
      setShow(false)
      setHostDetails(
        { 
          userName:`${userName}`,
          title:"",
          startingpoint:"",
          destination:"",
          startdate:"",
          enddate:"",
          price:"",
          people:"",
          number:"",
          description:""}
      )
      
    }
  }

  const handleClose1=()=>{
    setHostDetails(
      { 
        userName:`${userName}`,
        title:"",
        startingpoint:"",
        destination:"",
        startdate:"",
        enddate:"",
        price:"",
        people:"",
        number:"",
        description:""}
    )

  }

  const getAllHostDetails=async()=>{
    const result= await getAllHostApi()
   /*  console.log(result); */
    setAllHostDetails(result.data.reverse())
    
  }

   const getAllPostDetails=async()=>{
    const result= await getAllPostApi()
     //console.log(result.data); 
   setAllPostDetails(result.data.reverse())
    
  }


  useEffect(()=>{getAllHostDetails()},[addHostStatus,deleteHostStatus])
  useEffect(()=>{getAllPostDetails()},[deletePostStatus])


  return (
    
      <>
      <Header/>
        <div className="row w-100">
          <div className="col-md-5 p-4 d-flex justify-content-center align-items-center bg-light rounded" >
          <div className="hytcard card rounded d-flex justify-content-center align-items-center" id='hytcard' >
            <div className='' >
              <h3 className='text-light font1'>Mood for a trip?</h3>
              <button className='btn btn-light w-100' variant="primary" onClick={handleShow}>Host a Trip</button>
            </div>
            <div>
              <button className='btn btn-light mt-3' onClick={() => handleButtonClick('Feedcard')} id='hytbutton'>Events</button>
            </div>
            
            <div>
              <button className='btn btn-light mt-3' onClick={() => handleButtonClick('Postfeed')} id='hytbutton'>Feed</button>
            </div>
            
          </div>
          </div>
          <div className="col-md-7" id='homeleft' style={{overflowY:'scroll', height:'100vh'}}>

            {<div className='my-4 '>
            <Search/>
            </div>}

             {component === 'Feedcard' ? 
             (allHostDetails ? 
             allHostDetails?.map((item)=>(<Feedcard trips={item} setDeleteHostStatus={setDeleteHostStatus}/>)) : <p>No Trips Available</p> ) 
             : (allPostDetails ? 
              allPostDetails?.map((item)=>(<Postfeed moment={item} setDeletePostStatus={setDeletePostStatus}/>)) : <p>No Posts Available</p>)}

             
   
          
          </div>

          <Modal show={show} onHide={handleClose} size='md'>
        <Modal.Header closeButton>
          <Modal.Title>It's your turn to show up!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center flex-column align-items-center'>
          <div className="mb-3 w-100 d-flex justify-content-center flex-column align-items-center">
            <input type="text" placeholder='title' className='form-control w-100' onChange={(e)=>setHostDetails({...hostDetails,title:e.target.value})} value={hostDetails.title}/>
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center w-100">
          <input type="text" placeholder='Starting point' className='form-control me-2' value={hostDetails.startingpoint} onChange={(e)=>setHostDetails({...hostDetails,startingpoint:e.target.value})}/>
          <input type="text" placeholder='Destination' className='form-control'  onChange={(e)=>setHostDetails({...hostDetails,destination:e.target.value})} value={hostDetails.destination}/>
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center w-100">
          <input type="date" placeholder='start date' className='form-control me-2' onChange={(e)=>setHostDetails({...hostDetails,startdate:e.target.value})} value={hostDetails.startdate}/>
          <input type="date" placeholder='end Date' className='form-control' onChange={(e)=>setHostDetails({...hostDetails,enddate:e.target.value})} value={hostDetails.enddate}/>
          </div>
          <div className="mb-3 d-flex justify-content-center align-items-center w-100">
          <input type="text" placeholder='Estd. Price in rupees' className='form-control me-2' onChange={(e)=>setHostDetails({...hostDetails,price:e.target.value})} value={hostDetails.price}/>
          <input type="text" placeholder='no.of people' className='form-control' onChange={(e)=>setHostDetails({...hostDetails,people:e.target.value})} value={hostDetails.people}/>
          </div>
          <div className="mb-3 w-100 d-flex justify-content-center flex-column align-items-center">
            <input type="text" placeholder='Your watsapp Number' className='form-control w-100' onChange={(e)=>setHostDetails({...hostDetails,number:e.target.value})} value={hostDetails.number}/>
          </div>

          <div className="mb-3 w-100">
         <textarea name="" placeholder='Describe your trip' rows={5} className='form-control' onChange={(e)=>setHostDetails({...hostDetails,description:e.target.value})} value={hostDetails.description}></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose1}>
            Discard
          </Button>
          <Button variant="success" onClick={handleAdd}>
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