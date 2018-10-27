import React from 'react';
import PropTypes from 'prop-types';
import presenter from 'cp/presenter';
import Interface from 'SampleContainer/SampleContainer.interface.js';
import './Level2.scss';

// Classic React Component inside of @container

export default
@presenter
class Level2 extends React.Component {

    // You can combine props from @container with own props
    static propTypes = {
       ...Interface.publicInterface,
        ownProperty: PropTypes.string.isRequired
    };

    /* Or use defaults if it has no other props than @container provide
    static propTypes = Interface.publicInterface;
    */

    /* Or just avoid @container at all - we KNOW that we have @container up-tree
    static propTypes = {
        ownProperty: PropTypes.string.isRequired
    };
    */


    state = {
        showSomething: true
    }

    // own action
    onClick = () => this.setState({ showSomething: !this.state.showSomething });

    render() {
        const {
            ownProperty,

            // @container props
            font,
            onColor
        } = this.props;

        const { showSomething } = this.state;

        return (
            <div className="Level2">
                <div style={{ fontSize: font }}>Level 2</div>

                <div onClick={this.onClick}>
                    ownProperty: {showSomething && ownProperty}
                </div>

                <button onClick={() => onColor('red')}>set red</button>
                <button onClick={() => onColor('green')}>set green</button>
            </div>
        )
    }
};
