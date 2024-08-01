import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-Photoroom.png'


function Header() {
  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:"#fdc6ba"}}>
      <Container>
        <Navbar.Brand className='fw-bold'>
          <img src={logo} alt="" width={"50px"}/>
          Exploreo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link to={'/aboutus'} className='me-md-5 mt-3 mt-md-0 fw-bold'style={{textDecoration:"none",color:"#27192f"}}><>About Us</></Link>
            <Link to={'/profile'} className='me-md-5 mt-3 mt-md-0 fw-bold'style={{textDecoration:"none",color:"#27192f"}}>My Profile</Link>
            <Link to={'/'}><button className='btn btn-warning fw-bold mt-3 mt-md-0'style={{textDecoration:"none"}}>Log Out</button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header