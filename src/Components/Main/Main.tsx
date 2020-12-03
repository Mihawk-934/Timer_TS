import React, { useState, useEffect } from 'react';
import './Main.css';
import calculateTimer from '../../Helper/Timer';
import Controls from '../Controls/Controls';
import { BiTimer } from 'react-icons/bi';

const Main = () => {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState <Array<number | string>>([]);

    useEffect(() => {
        let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
        setTimerArray(timeArray);
    }, [timeInSeconds]);

    return (
        <main>
            <h1>Timer <BiTimer style={{color: "#ccc", marginBottom:'-12px'}} size={62}/></h1>
            <section className="timer-container">
                <p className="timer-text">{timerArray[0]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[1]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[2]}</p>
            </section>
            <Controls setTimeInSeconds={setTimeInSeconds}/>
        </main>
    )
}

export default Main;