import React from 'react';
import container from 'cp/container';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';

export default
@container
class App extends React.Component {
  state = {
    color: 'black',
    font: 'normal',

    onColor: (color) => this.setState({ color }),
    onFont: (font) => this.setState({ font })
  };

  onColor = (color) => this.setState({ color });
  onFont = (font) => this.setState({ font });

  render() {
    return (
      <div>
        <Level1 />
        <Level2 />

        <hr/>

        <Level3 />
        <Level4 />
      </div>
    )
  }
}
