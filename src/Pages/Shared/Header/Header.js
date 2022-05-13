import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
  // const [user] = useAuthState();
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} fixed='top'>
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img className='w-75' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span className='text-danger fw-bold'>Service</span> Provider
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/home">Home</Nav.Link>
                  <Nav.Link href="/home#services">Service</Nav.Link>
                  <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  {/* {user ? <NavDropdown
                    title="Profile"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown> :
                    <Nav.Link as={Link} to="/blog">Login</Nav.Link>
                  } */}
                </Nav>
                {/* <Form className="d-flex mt-1">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;