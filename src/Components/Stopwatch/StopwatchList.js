import Stopwatch from "./Stopwatch";
import React, { useState, useEffect } from "react";
import './Stopwatch.css';

const StopwatchList = () => {
    const [watchList, setWatchList] = useState([])
    const [input, setInput] = useState("");

    const saveWatchSpeed = (e) => {
        e.preventDefault();
        localStorage.setItem("watchSpeed", input);
        setInput("");
    }

    const addStopWatch = () => {
        setWatchList([...watchList, <Stopwatch key={Math.random()} id={Math.random()} handleRemove={handleRemove} />]);
    }

    function handleRemove(id) {
        setWatchList((watchList) => watchList.filter((item, i) => {
            return item.props.id !== id
        }));
    }

    const pauseAllTime = () => {
        let highestInterval = localStorage.getItem('interval')
        for (let i = highestInterval; i > 0; i--) {
            clearInterval(i)
        }
    }

    const resetAllTime = () => {
        setWatchList(watchList.map((el) => <Stopwatch key={Math.random()} id={Math.random()} handleRemove={handleRemove} />))
    }

    useEffect(() => {
        localStorage.removeItem("watchSpeed")
    }, [])

    return <div className='wrapper'>

        <button className='watch-button' onClick={addStopWatch}>Add stopwatch</button>
        <button className='watch-button' onClick={pauseAllTime}>Pause ALL</button>
        <button className='watch-button' onClick={resetAllTime}>Reset ALL</button>
        <form className="watch-form" onSubmit={saveWatchSpeed}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className="watch-input" />
            <button type="submit" className="watch-button">Change the speed</button>
        </form>
        {watchList}
    </div>

}

export default StopwatchList