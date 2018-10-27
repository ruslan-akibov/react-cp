import React from 'react';
import container from 'cp/container';
import Interface from './SampleContainer.interface';
import Level1 from './Level1/Level1';

// This file implements logic

export default
@container
class App extends Interface {   // here 'extends' means 'implements'
    // Action handlers
    onColor = (color) => this.setState({ borderColor: color });
    onSize = (size) => this.setState({ borderSize: size });
    onFont = (font) => this.setState({ font: font });

    render() {
        // logical part of 'render' could be here
        return (
            <Level1 />
        )
    }
}
