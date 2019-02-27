import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import video1 from './video1.png';
import './Media.css'
class Media2 extends Component {
    state = { open: false }
  
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open, dimmer } = this.state
  
      return (
        <div className="fix_media">
          
          <Button onClick={this.show('blurring')}> <img src={video1} className="sample2" /></Button>
  
          <Modal dimmer={dimmer}  open={open} onClose={this.close}>
          <iframe width="400" className="iframepos"  frameborder="0" height="250" src="https://www.youtube.com/embed/KtYw2V1qNbU?autoplay=1">
     </iframe>

            
              </Modal>

              

            </div>
          )
        }
      }
      
      export default Media2;
      