import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Service extends Component
{
    render()
    {
        return(
            <div className='servicesection' style={{marginTop:"5%",font:"Roboto",weight:"500",size:"32px",color:"#1F2E35"}}>
                <h4 style={{textAlign: "center",marginBottom:"40px"}}>Product and Service</h4>
                <Container>
                <Row>
                 <Col xs={12} md={4}>
                 <h5 style={{font:"Roboto",weight:"500",size:"28px",color:"#EE4248"}}>Our Product</h5>
                 <p>Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.</p>
                 <Button variant="danger" style={{backgroundColor:"#EE4248"}}>Read More</Button>{' '}
                 </Col>
                  <Col xs={12} md={4}>
                  <h5 style={{font:"Roboto",weight:"500",size:"28px",color:"#EE4248"}}>Our Service</h5>
                 <p>DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.</p>
                 <Button variant="danger" style={{backgroundColor:"#EE4248"}}>Read More</Button>{' '}
                  </Col>
                  <Col xs={12} md={4}>
                  <h5 style={{font:"Roboto",weight:"500",size:"28px",color:"#EE4248"}}>Our Technology</h5>
                 <p>First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.</p>
                 <Button variant="danger" style={{backgroundColor:"#EE4248"}}>Read More</Button>{' '}
                  </Col>
                 </Row>
                 </Container>
            </div>
        )
    }
} 