import React from 'react';
import { Context } from './container';

export default function(Component) {
    return function(props) {
        return (
            <Context.Consumer>
            {
                publicProps => {
                    return publicProps.container ?
                        <Component
                            {...publicProps}
                            {...props}
                        />
                        : null;
                }
            }
            </Context.Consumer>
        );
    }
}
