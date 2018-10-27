import React from 'react';
import PropTypes from 'prop-types';

// Interface
// This file contains public part, some kind of description - interface or header or model or ...

export default class extends React.Component {
    // Classical PropTypes - 'external interface'
    static propTypes = {
        borderStyle: PropTypes.string
    }
    static defaultProps = {
        borderStyle: 'solid'
    }


    // Container initial state
    // Part of interface as defaultProps
    state = {
        borderColor: 'black',
        borderSize: '1px'
    }

    // 'Selectors' pattern - calculated values could be used by many @presenters
    static getDerivedStateFromProps(
        { borderStyle }, // props
        { borderColor, borderSize } // state
    ) {
        // some pure calculations
        const border = `${borderStyle} ${borderSize} ${borderColor}`;

        return {
            border
        }
    }


    // *.h for @container (think as StateTypes) - 'internal interface'
    // Optional, if not specified - takes all own props, state, and props of @container (but not *.isRequired then)
    // This things will be passed to @presenter
    // Finding order is: this.* -> this.state.* -> this.props.* -> undefined
    static publicInterface = {
        border: PropTypes.string.isRequired,    // from state (is a Selector)
        font: PropTypes.string, // from state (NOT from Interface)

        // own methods (arrow functions)
        onColor: PropTypes.func.isRequired,
        onSize: PropTypes.func.isRequired,
        onFont: PropTypes.func.isRequired
    }
}
