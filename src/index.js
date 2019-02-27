import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Marquee from './Marquee.js';
import * as serviceWorker from './serviceWorker';
import People from './People.js';
import Static from './Static.js';
import Media from './Media.js';
import "semantic-ui-css/semantic.min.css";
import Corusal from './Corusal.js'
import Popupp from './Popupp.js'
import Media2 from './Media2'
import Carousal from './Carousal.js' 
import SimpleSlider from './SimpleSlider'
import Footering from './Footering.js'
import Janani from './Janani'
import Last from './Last'
ReactDOM.render(
    <div>
     <Marquee /> 
     <Last />
     <Marquee />
    </div>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
