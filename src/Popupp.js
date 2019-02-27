import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'
import video1 from './video1.png';
export default class TransitionExampleTransition extends Component {
  state = { visible1: true }

  toggleVisibility = () => this.setState({ visible1: !this.state.visible1 })

  render() {
    const { visible1 } = this.state

    return (
      <div>
        <Button content={<img src={video1}/>} onClick={this.toggleVisibility} />
        <Divider hidden />
        <Transition visible={visible1} animation='scale' duration={500}>
        <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
</iframe>

        </Transition>
      </div>
    )
  }
}