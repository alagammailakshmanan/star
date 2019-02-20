import React, { Component } from 'react';
import logo from './logo.svg';
import './star.css';
//import {Link} from "react-router-dom";
import { Button} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
    <div className="box">
    <img className="fix" src="https://www.starhealth.in/sites/all/themes/starhealth/newui/images/fa-img.jpg" alt="Flying Kites" />
    <div className="text">
        <h1 className="center_text">When it comes to health there should be no compromise</h1>
        <style type="text/css">
{`
.btn-flat {
  
  color: rgb(76, 50, 182);
  border-width:3px;
  border-style: solid;
  background-color: white;
  border-radius: 20px;
  border-color:rgba(0,0,255,0.5);
  width:16%;
  margin-left :10px ;
  text-decoration:none;
  letter-spacing:0.02;
  transform: translateY(4px);
  box-shadow: 0 5px #666;
  
}
.btn-flat:hover{
  background-color:rgb(162, 218, 239);
  color:white;
  transition:.5s all ease-in-out;
  
}

.btn-xxl {
  padding: 0.5rem 0.3rem;
  font-size: 1.0rem;
}
`}
</style>
<center>
<Button variant="flat" size="xxl" href="https://www.starhealth.in/#myselfcontent" target="_blank">Plan for Myself</Button>   
<Button variant="flat" size="xxl" href="https://www.starhealth.in/#myfamilycontent" target="_blank">Plan for My family</Button>
<Button variant="flat" size="xxl" href="https://www.starhealth.in/#myparentscontent" target="_blank">Plan for My Parents</Button>
<Button variant="flat" size="xxl" href="https://www.starhealth.in/#travelcontent" target="_blank">Travel Insurance</Button>
<Button variant="flat" size="xxl" href="https://www.starhealth.in/#accidentcarecontent" target="_blank">Accident care</Button>
</center>
</div>
    </div>
            
       
    );
  }
}

export default App;
