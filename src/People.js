import React from 'react';
import { Segment, Image } from 'semantic-ui-react'
import people from './people.png';

import './People.css';
//const src = people;

//const People = () => (
  
//   <div >
    
//     <h1 className="text_people">Why Star Health Insurance is a smart choice
// </h1>
//   {/* <div className="block1">
//     <p className="inner1">Hassle-free and customer-friendly direct claim settlement without intervention of TPA</p>
//   </div> */}
//  <img className="pos_people" src={src} />
// </div>

{/* <div className="box">
        <img src={people} alt="Flying Kites">
        <div class="text">
            <h1>Flying Kites</h1>
        </div>
    
   
    </div>


)

export default People; */}
class People extends React.Component {
  render(){
    return(
      
      <div class="container">
      
     <div className="clearfix">
       <h1 className="bottom-left">
Why Star Health Insurance is a smart choice</h1>
     </div>
     <div className="clearfix">
       <p className="top-left">Hassle-free and customer-friendly direct claim settlement without intervention of TPA</p>
     </div>
     <div className="clearfix">
     <p className="top-right">Largest Network hospital base of over 8800+ hospitals</p>
     </div>

<div className="clearfix">
  <p className="bottom-right ">5,46,788 claims settled in the financial year 2017-2018
</p>
</div>
       </div> 
    
   );
  }
}
export default People;
