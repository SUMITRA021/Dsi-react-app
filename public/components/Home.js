import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const element = <FontAwesomeIcon icon={faCoffee} />

export class Home extends Component
{
    render()
    {
        return(

            <div className="navheader">
            <br />
            <div style={{width:"100%"}}>
            <Navbar bg="light" expand="lg"  >
        <Navbar.Brand href="#home"><img src="c.png" style={{float:"left"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Product">Product</Nav.Link>
            <Nav.Link href="#Technology">Technology</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Profile/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#Team member/3.2">Team member</NavDropdown.Item>
              <NavDropdown.Item href="#Culture/3.3">Culture</NavDropdown.Item>
              <NavDropdown.Item href="#Gallery/3.3">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#Location/3.3">Location</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            <NavDropdown title="Client" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Client list/3.1">Client list</NavDropdown.Item>
              <NavDropdown.Item href="#Testimonial/3.2">Testimonial</NavDropdown.Item>
             
              <NavDropdown.Divider />
              
            </NavDropdown>
            <Nav.Link href="#Partner">Partner</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>

      <Container>
             <Row style={{marginTop:"20px",marginBottom:"20px"}}>
                 <Col xs={12} md={6} style={{marginTop:"5%"}}>
                    <h3 style={{Font:"Roboto",Weight:"700",Size:"48px",alignContent:"start"}}>Making the most of the ever-growing</h3>
                    <h3 style={{Font:"Roboto",Weight:"700",Size:"48px",alignContent:"start",color:"#EE4248"}}>Information Technology</h3>
                    <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
                    <Button variant="danger" style={{backgroundColor:"#EE4248"}}>Read More</Button>{' '}
                 </Col>
                 <Col xs={12} md={6}>
                    <img src="a.jpg" style={{float:"right"}}></img>
                 </Col>
              </Row>
     </Container>
     </div>
        );
    }
}
