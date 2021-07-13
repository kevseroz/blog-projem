import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from './actions/useractions';
import { Navbar, Nav, Container } from 'react-bootstrap'
import './styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'





 function Header() {
  const auth = useSelector(state => state.userSignin);
  const { isAuthenticated } = auth;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    
    e.preventDefault();
    dispatch(logout());
  }

  return (
    
      <Navbar collapseOnSelect  expand="lg" className='header-color' variant="dark" fixed="top">
        <Container>
      <Navbar.Brand href="/">
                    KevserOzkan.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Yazılar</Nav.Link>
        <Nav.Link href="/hakkimizda" >Hakkımızda</Nav.Link>
        <Nav.Link  href="#deets"><FontAwesomeIcon icon={faInstagram} size='lg' className="ml-4"></FontAwesomeIcon></Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
        <FontAwesomeIcon icon={faFacebook} size='lg' ></FontAwesomeIcon></Nav.Link>
        <Nav.Link  href="#deets"><FontAwesomeIcon icon={faEnvelope} size='lg' ></FontAwesomeIcon></Nav.Link>

        {isAuthenticated ? (
          <Nav >
            
            <Nav.Link href="/admin/urunler875548674">Post Düzenle</Nav.Link>
         
            <Nav.Link onClick={submitHandler}>Çıkış</Nav.Link>
            </Nav>
          ) : (<div></div>)}

      </Nav>
    </Navbar.Collapse>
    </Container>
      
      </Navbar>
  
  );
}

export default Header;

