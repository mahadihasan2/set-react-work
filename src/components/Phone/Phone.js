import React from 'react';

const Phone = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <h3>Phone Price: {props.price}</h3>
            <p>Phone: {props.details}</p>
        </div>
    );
};

export default Phone;