import { setBig, setSmall } from './sampleMiddleware';
import React from "react";

export default
class Level3 extends React.Component {
    render() {
        return (
            <div>
                <button onClick={setBig}>set big</button>
                <button onClick={setSmall}>set small</button>
            </div>
        );
    }
}
