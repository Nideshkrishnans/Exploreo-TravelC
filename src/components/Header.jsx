import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , useNavigate} from 'react-router-dom';
import logo from '../assets/logomain.png'
import { useContext, useEffect, useState } from 'react';
import { isLoginAuthContext } from '../Contextshare/ContextShare';



function Header() {
  const navigate = useNavigate()
  const {setIsLoginStatus} = useContext(isLoginAuthContext)

  const [userName , setUserName]=useState("")


  const logout =()=>{
    sessionStorage.removeItem("userName")
    sessionStorage.removeItem("userProfileId")
    setIsLoginStatus(false)
    navigate('/')

  }

  useEffect(()=>{
    if(sessionStorage.getItem("userName")){
      setUserName(sessionStorage.getItem("userName"))
    }
  })

  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:"#27192f"}}>
      <Container>
        <Navbar.Brand className='fw-bold'>
          <img src={logo} alt="" width={"50px"} />
          <span style={{color:'white'}}>Exploreo</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link to={'/home'} className='me-md-5 mt-3 mt-md-0 fw-bold'style={{textDecoration:"none",color:"white"}}><>Home</></Link>
            <Link to={'/aboutus'} className='me-md-5 mt-3 mt-md-0 fw-bold'style={{textDecoration:"none",color:"white"}}><>About Us</></Link>
            <Link to={'/profile'} className='me-md-5 mt-3 mt-md-0 fw-bold'style={{textDecoration:"none",color:"white"}}>My Profile</Link>
            <button className='btn btn-light fw-bold mt-3 mt-md-0'style={{textDecoration:"none"}} onClick={logout}>Log Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header