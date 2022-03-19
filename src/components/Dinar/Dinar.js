import React from 'react';

const Dinar = (props) => {
    return (
        <div style={{ backgroundColor: 'yellow', border: '2px solid gray', margin: "20px" }}>
            <p>this is so far dinar: {props.steps}</p>
        </div>
    );
};

export default Dinar;