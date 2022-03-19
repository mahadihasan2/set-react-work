import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setStaps] = useState(0)
    const incressStep = () => {
        const newStepCount = steps + 1
        setStaps(newStepCount)

    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{ backgroundColor: 'red', margin: '20px', border: '2px solid green', borderRadious: '20px' }}>
            <h1>This is my Watch: { }</h1>
            <h3>My current step: {steps}</h3>
            <button onClick={incressStep}>DeDhor.....</button>
            <Display name='Samsung-Brand' steps={steps}></Display>
        </div>
    );
};

export default Watch;