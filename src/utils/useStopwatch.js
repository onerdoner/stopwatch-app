import { useEffect, useState } from "react";
import { calculateHighestInterval } from "./calculateHighestInterval";

export const useStopwatch = () => {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [intervalId, setIntervalId] = useState(null)

    const watchSpeed = localStorage.getItem("watchSpeed") ? parseInt(localStorage.getItem("watchSpeed")) : 1;

    useEffect(() => {
        calculateHighestInterval(intervalId)
    }, [intervalId])

    useEffect(() => {
        if (time <= 0) {
            clearInterval(intervalId)
        }
    }, [time])

    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 1000 / watchSpeed);
        } else if (!active && time !== 0) {
            interval = setInterval(() => {
                setTime(time => time - 1);
            }, 1000 / watchSpeed);
        }
        setIntervalId(interval)
    }, [active]);


    return {
        active,
        setActive,
        intervalId,
        setIntervalId,
        time
    };
};