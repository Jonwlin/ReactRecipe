import React from 'react';
import {HeaderLink} from "./HeaderLink"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const navBarStyles = {
  backgroundColor: "#ffffff",
};

export default class Header extends React.PureComponent {
  render(): any {
    return (
      <Navbar bg="light" variant="light" expand="lg" sticky="top" style={navBarStyles}>
        <Container>
          <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HeaderLink page="profile" href="/"/>
              <HeaderLink page="travel" />
              <HeaderLink page="recipes" />
              <HeaderLink page="linkedin" href="http://www.linkedin.com/in/xjonathan" />
              <HeaderLink page="github" href="http://www.github.com/jonwlin" />
              <HeaderLink page="kaggle" href="http://www.kaggle.com/jwlin17"/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}