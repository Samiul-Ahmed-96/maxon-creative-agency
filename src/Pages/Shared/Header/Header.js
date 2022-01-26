import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../Images/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <Navbar fixed="top" className="header" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={HashLink} to="/home">
            <img src={logo} alt="Maxon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="menu">
              <Link to="/home#banner">Home</Link>
              <HashLink to="/home#about">About</HashLink>
              <HashLink to="/home#features">Features</HashLink>
              <HashLink to="/home#projects">Project</HashLink>
              <HashLink to="/home">Blog</HashLink>
              <HashLink to="/home">Contact</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
