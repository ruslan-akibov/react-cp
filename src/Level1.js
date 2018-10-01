import React from 'react';
import presenter from 'cp/presenter';
import Level2 from './Level2';

export default
@presenter
class Level1 extends React.Component {
  render() {
    const {
      color,
      onFont
    } = this.props;

    return (
      <div>
        <div style={{ color }}>Level 1</div>
        <button onClick={() => onFont('bold')}>set bold</button>
        <button onClick={() => onFont('normal')}>set normal</button>

        <Level2 />
      </div>
    );
  }
}
