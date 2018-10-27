import React from 'react';

export const Context = React.createContext({});

function has(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

function publicProps(container, Interface) {
    if (!Interface) {
        return {
            ...container.props,
            ...container.state,
            ...container,
            container
        }
    }

    const props = {};
    for (const prop in Interface) {
        if (has(container, prop)) {
            props[prop] = container[prop];
        } else if (has(container.state, prop)) {
            props[prop] = container.state[prop];
        } else if (has(container.props, prop)) {
            props[prop] = container.props[prop];
        } else {
            props[prop] = undefined;
        }
    }

    props.container = container;
    return props;
}

export default function(Component) {
    return class extends Component {
        render(...args) {
            return (
                <Context.Provider value={publicProps(this, Component.publicInterface)}>
                    {super.render(...args)}
                </Context.Provider>
            );
        }
    };
}
