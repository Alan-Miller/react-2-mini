import React, { Component } from 'react';

import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {

  constructor() {
    super()

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true
    }

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

  updateColor(val) {
    this.setState({
      updateColor: val    
    })
  }

  updateSize(val) {
    this.setState({
      updateSize: val    
    })
  }

  updateFamily(val) {
    this.setState({
      updateFamily: val    
    })
  }

  updateEditStatus(val) {
    this.setState({
      updateEditStatus: val    
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
           <EditToggle    updateEditStatus={ this.updateEditStatus } />
           <ColorChanger  updateColor={ this.updateColor } />
           <SizeChanger   updateSize={ this.updateSize } />
           <FamilyChanger updateFamily={ this.updateFamily } />
        </div>
        <div className="textArea">
          <TextContainer  fontFamily={ this.state.fontFamily }
                          fontColor={ this.state.fontColor }
                          fontSize={ this.state.fontSize } />
        </div>
      </div>
    )
  }
}

export default App;