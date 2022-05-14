import React, { useEffect } from 'react';
import './App.css';
import ReCAPTCHA from "react-google-recaptcha";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,MenuItem,DropdownButton,NavItem,Nav,Container,NavDropdown} from 'react-bootstrap';
import axios from "axios";
import {Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Pnr() {
const [f, setCount] = React.useState(0);
const [z,setValue]=React.useState(null);
const [k,setPlace]=React.useState(null);
 function onChanges() {
    setCount(f+1);}
    const fetchData = React.useCallback(() => {

    axios({
      method: 'get',
      url:  'https://indianrailways.p.rapidapi.com/index.php',
      params: {pnr: k
      },
      headers: {
        'x-rapidapi-host': 'indianrailways.p.rapidapi.com',
        
        'x-rapidapi-key': '4607423372msh45bdf76862fbfa5p10dff7jsnb098c8b5fc50'
      },})
      .then(function (response) {
        setValue(response.data);
        console.log(z);
      });
    })
    function checkCaptcha()
    {if(f==0)
    {alert('Captcha is not verified')}
   else  if(k==null)
    {alert('Please fill PNR')}
    else if(k.length!=10)
    {alert('Please enter 10 digits')}
  }
  return (  
    <div className="App"   style={{ backgroundColor: 'lightblue',height:'1000vh',backgroundRepeat:'no-repeat',backgroundSize:'cover' } }>
   <Navbar  expand="lg" style={{backgroundColor:'lightgreen'}}>
  <Container>
    <Navbar.Brand href="#home">About Us</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link  href ="https://www.irctc.co.in/nget/train-search">IRCTC</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Train Details</NavDropdown.Item>
          <NavDropdown.Item ><Link to="/BWstation">Stations in city</Link></NavDropdown.Item>
        
                </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <div className='Header'>

     
        <p className='tetd eco'>
       {/* Enter City Name:*/  }
        
        </p>
        <form>
      <input type="number" placeholder='Enter your PNR no' className='box'   onChange={(e) => setPlace(e.target.value)}/>
              
       <br/>
        
       <br/>
</form>
        <button type='button' className='button' onClick ={(event)=>[fetchData(),checkCaptcha()]}>Submit</button>
        <ReCAPTCHA className='captcha'
    sitekey="6LcYuF4eAAAAAKRmP_ZFT503qhrIFum2KwwIhj5N"
    onChange={onChanges}
    style={{
      position: 'absolute', left: '50%', top: '150%',
      transform: 'translate(-50%, -50%)'
  }}
/>

 </div>

 <h1 style ={{marginLeft:'500px'}}> Find ticket status  </h1> {
  <div >{f?
   <div style={{marginTop:'500px'} }>{z ? 
          <div style={{marginLeft:'550px'}}>{z.error}</div>:<h1></h1>}
          </div>
          :<h1></h1>}
        </div>}
      
     </div>
      
  );
}
export default Pnr;