import React, { useState } from 'react';

const Watch = () => {
    const [steps, setStaps] = useState(0)
    const incressStep = () => {
        const newStepCount = steps + 1
        setStaps(newStepCount)

    }

    return (
        <div>
            <h1>This is my Watch: { }</h1>
            <h3>My current step: {steps}</h3>
            <button onClick={incressStep}>DeDhor.....</button>
        </div>
    );
};

export default Watch;