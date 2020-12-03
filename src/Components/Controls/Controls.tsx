import React, { useState } from 'react';
import './Controls.css';

type Props = {
    setTimeInSeconds: Function
}

const Controls = (props: Props) => {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlay = () => {
        let interval:any = setInterval(() => {
            setTimeInSeconds((previousState: number) => previousState + 1);
        }, 1000)
        setIntervalId(interval);
    }

    const handleStop = () => {
        clearInterval(intervalId);
    }

    const handleReset = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return (
        <section className="controls-container">
            <button onClick={handlePlay}>Play</button> 
            <button onClick={handleStop}>Stop</button> 
            <button onClick={handleReset}>Reset</button> 
        </section>
    )
}

export default Controls;