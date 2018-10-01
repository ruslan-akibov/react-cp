import React from 'react';
import { Context } from './container';

export default function(Component) {
  return function(props) {
    return (
      <Context.Consumer>
        {
          value => {
            const { container = null } = value || {};

            return container
              ? <Component
                  {...container.props}
                  {...container.state}
                  container={container}
                  {...props}
                />
              : null;
          }
        }
      </Context.Consumer>
    );
  }
}
