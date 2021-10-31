import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut, sign } = useAuth();
  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        sticky='top'
        collapseOnSelect
        expand='lg'
      >
        <Container>
          <Navbar.Brand as={Link} to='/home'>
            Tours BD
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link as={Link} to='/home'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/services'>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to='/dashboard'>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant='light'>
                Log Out
              </Button>
            ) : (
              <Nav.Link as={Link} to='/login'>
                LogIn
              </Nav.Link>
            )}
            <Navbar.Text>
              Signed in as: <a href='#login'>{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
