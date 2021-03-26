import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Footer extends Component
{
    render()
    {
        return(
            <div className='footersection' style={{marginTop: "80px"}}>
              <Container>
                <Row>
                 <Col xs={12} md={4}>
                 <img src="c.png" style={{height:"35px",width:"100px"}}></img><br></br>
                <b style={{font:"Roboto",weight:"500",size:"18px",color:" #263238",}}>PT Dwidasa Samsara Indonesia</b>
                <p style={{font:"Roboto",weight:"500",size:"18px",color:" #263238"}}>Ruko Jalur Sutera 29A No. 53Alam Sutera Serpong, Tangerang 15323</p>
                 </Col>
                  <Col xs={12} md={4}>
                  <h5 style={{font:"Roboto",weight:"500",size:"24px",color:" #263238"}}>Contact</h5>
                 <p style={{font:"Roboto",weight:"500",size:"18px",color:" #263238"}}>Phone : +62.21.5314.1135<br></br>
                    Fax : +62.21.5314.1135<br></br>
                    Email : community@dwidasa.com</p>
                 
                  </Col>
                  <Col xs={12} md={4}>
                  <img src="d.png" style={{height:"75px",width:"350px"}}></img>
                  </Col>
                 </Row>
                 </Container>

                 <div class="row" style={{backgroundColor:"#EE4248",backgroundRepeat:"no-repeat",background:"cover"}}>
                  <p style={{marginLeft:"35%"}}>
                      copyright &copy; 2015 - Dwidasa Samsara Indonesia
                  </p>
              </div>

            </div>
        )
    }
} 