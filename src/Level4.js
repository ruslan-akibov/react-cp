import withSomething from './sampleMiddleware';
import React from "react";

export default
@withSomething
class Level4 extends React.Component {
    render() {
        const {
            SOMETHING
        } = this.props;

        return (
            <div>
                <div style={{ fontSize: SOMETHING.size }}>Middleware - stupid</div>
            </div>
        );
    }
}
