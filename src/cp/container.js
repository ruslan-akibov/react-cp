import React from 'react';

export const Context = React.createContext(null);

export default function(Component) {
  return class extends Component {
    render(...args) {
      return (
        <Context.Provider value={{ container: this }}>
          {super.render(...args)}
        </Context.Provider>
      );
    }
  };
}
