import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useLocalStorage } from "usehooks-ts";
import { storageKeys } from "../services/storage.service";
import IUser from "../types/user.type";

interface HeaderProps {
  logout: () => void
}

const Header: React.FC<HeaderProps> = ({ logout }) => {
  const [currentUser, setCurrentUser] = useLocalStorage(storageKeys.user, null);
  const [logged, setLogged] = useLocalStorage(storageKeys.logged, false);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">NFT Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/collections">Collections</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {logged ? (
              <Nav.Link>
                <Button onClick={logout}>Logout</Button>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="/login">
                  <Button>Login</Button>
                </Nav.Link>
                <Nav.Link href="/signup">
                  <Button>Signup</Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
