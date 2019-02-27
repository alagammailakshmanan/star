import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import slide3 from './slide3.gif';
import './Corusal.css';
export default class Corusal extends React.Component {
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "./Newscript.js";
        script.async = true;

        document.body.appendChild(script);
    }
   render(){
       return(
           <div>
                <div className="slideshow-container">
    
    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
      <img src={slide1} width="100%" />
      <div className="text">Caption Text</div>
    </div>
    
    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
      <img src={slide2} width="100%"/>
      <div className="text">Caption Two</div>
    </div>
    
    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
      <img src={slide3} width="100%"/>
      <div className="text">Caption Three</div>
    </div>
    
    <a className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
    <a className="next" onClick={this.plusSlides(1)}>&#10095;</a>
    
    </div>
<br></br>
    
    <div className="FLOWER">
      <span className="dot" onClick={this.currentSlide(1)}></span> 
      <span className="dot" onClick={this.currentSlide(2)}></span> 
      <span className="dot" onClick={this.currentSlide(3)}></span> 
    </div>

  
           </div>
       
        
        
        );
       }
   }
   
  
  