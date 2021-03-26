import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class About extends Component
{
    render()
    {
        return(
           
 <Container>
 <Row style={{marginTop:"5%"}}>
 <Col xs={12} md={6}>
    <img src="b.jpg"></img>
   </Col>
  <Col xs={12} md={6}>
  <h4 style={{font:"Roboto",Weight:"500",size:"32px",color:"#1F2E35",marginTop:"30%"}}>Welcome to <span style={{color:"#EE4248"}}>Dwidasa Samsara Indonesia (DSI)</span></h4>
<p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span style={{color:"#EE4248"}}>DSI’s</span> distinct front-end based application concept.</p>
<p>Managed by a team of professional experts with extensive experience and impressive track records, <span style={{color:"#EE4248"}}>DSI’s</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
  </Col>
  </Row>
  </Container>
        )
    }
} 