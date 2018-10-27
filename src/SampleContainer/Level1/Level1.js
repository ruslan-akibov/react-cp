import React from 'react';
import presenter from 'cp/presenter';
import Level2 from './Level2/Level2';

// It is recommended way - functional component is simple, props usage is visible in destruction
// We can avoid propTypes at all - we KNOW that we have @container

export default presenter(({
    border,
    font,

    onFont,
    onSize
}) => (
    <div style={{ border }}>
        <div style={{ fontSize: font }}>Level 1</div>

        <button onClick={() => onFont('2em')}>set big</button>
        <button onClick={() => onFont('1em')}>set normal</button>

        <Level2
            ownProperty="Fine!"
        />

        <button onClick={() => onSize('1px')}>set thin</button>
        <button onClick={() => onSize('5px')}>set thick</button>
    </div>
));
