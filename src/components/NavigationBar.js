import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


const NavigationBar = (props) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        style={{
          background: "#5f9ea0",
          paddingTop: ".5rem",
          paddingBottom: ".5rem",
        }}
      >
        <Navbar.Brand
          exact
          href="/"
          style={{
            fontStyle: "bold",
            letterSpacing: "3px",
            fontSize: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          DEEP FRYING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ textAlign: "center", letterSpacing: "3px" }}
          >
            <Nav.Link exact href="/recipes">
              Recipes
            </Nav.Link>

            <Nav.Link exact href="/contactus">
              Contact Us
            </Nav.Link>
            {/* <Nav.Link exact href="/story">Story</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          <Nav>
            {/*<Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

 }

export default NavigationBar;