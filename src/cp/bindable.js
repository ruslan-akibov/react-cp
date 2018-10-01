import React from 'react';

export default function (original) {
    let bindedComponents = [];
    let changeTimer = null;
    function onChange() {
        if (changeTimer) {
            clearTimeout(changeTimer);
            changeTimer = null;
        }

        changeTimer = setTimeout(() => {
            bindedComponents.forEach(c => c.setState({
                __dataflow: c.state.__dataflow + 1
            }));
        }, 16);
    }

    const connect = function(Component) {
        return class extends React.Component {
            state = {
                __dataflow: 0
            };

            componentDidMount() {
                bindedComponents.push(this);
            }

            componentWillUnmount() {
                bindedComponents = bindedComponents.filter(v => v !== this);
            }

            render() {
                return <Component __dataflow={this.state.__dataflow} {...original} {...this.props} />;
            }
        };
    };

    return new Proxy(original, {
        get: (target, name) => {
            if (name === 'connect') {
                return connect;
            }

            onChange();
            return target[name];
        },
        set: (target, name, val) => {
            onChange();
            return (target[name] = val);
        }
    });
}
