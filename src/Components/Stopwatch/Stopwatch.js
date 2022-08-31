import React, { useEffect } from "react";
import { useStopwatch } from "../../utils/useStopwatch";
import './Stopwatch.css';
import { calculateHighestInterval } from "../../utils/calculateHighestInterval";
import { AiFillMinusCircle, AiFillPlusCircle, AiFillPauseCircle, AiFillDelete } from "react-icons/ai";

const Stopwatch = ({ id, handleRemove }) => {
    const {
        active,
        setActive,
        intervalId,
        time
    } = useStopwatch()

    const pauseWatch = () => {
        clearInterval(intervalId)
    }

    const deleteWatch = () => {
        handleRemove(id)
    }

    const toggleWatch = () => {
        setActive(!active)
        clearInterval(intervalId)
    }

    return (
        <div>
            <div className='watch-row'>
                {time}
                <div className="iconsContainer">
                    <div onClick={toggleWatch} className='icon-starter'>{active ? <AiFillMinusCircle /> : <AiFillPlusCircle />}</div>
                    <AiFillPauseCircle onClick={pauseWatch} style={{ marginRight: 5, cursor: "pointer" }} />
                    <AiFillDelete onClick={deleteWatch} style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    )
}

export default Stopwatch