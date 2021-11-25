import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.png";
export default function MyNav() {
    return (
      <Navbar className="border-bottom" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <img
            alt="logo"
            src={logo}
            width="250"
            height="55"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ml-auto" variant="" defaultActiveKey="/home">
            <Link className="nav-link" to="/" style={{ color: "#ff7552" }}>
              Home
            </Link>
            <Link
            className="nav-link"
            eventKey="link-1"
            to="/projects"
            style={{ color: "#ff7552" }}
          >
            Projects
          </Link>
          <Link
            className="nav-link"
            eventKey="link-2"
            to="/contact"
            style={{ color: "#ff7552" }}
          >
            Contact me
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
