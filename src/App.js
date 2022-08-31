import React, { useState } from "react";
import './App.css';
import Stopwatch from "./Components/Stopwatch/Stopwatch";
import StopwatchList from "./Components/Stopwatch/StopwatchList";

function App() {

    return (
        <div className="watch-app">
            <h1>Stopwatch</h1>
            <hr className="separator" />

            <StopwatchList />
        </div>
    );
}

export default App;
