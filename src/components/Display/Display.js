import React from 'react';
import Dinar from '../Dinar/Dinar';

const Display = (props) => {
    return (
        <div style={{ border: '2px solid green', backgroundColor: 'gray', margin: '20px' }}>
            <h1>DisplayName: {props.name}</h1>
            <p>this so far step: {props.steps}</p>
            <Dinar steps={props.steps}></Dinar>
        </div>
    );
};

export default Display;