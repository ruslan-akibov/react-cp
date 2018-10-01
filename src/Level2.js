import React from 'react';
import presenter from 'cp/presenter';

export default presenter(({
  font,

  container: {
    onColor
  }
}) => (
    <div>
      <div style={{fontWeight: font}}>Level 2</div>
      <button onClick={() => onColor('red')}>set red</button>
      <button onClick={() => onColor('green')}>set green</button>
    </div>
));
