import React, { useState, useContext } from 'react'
import { GoalDistanceContext } from "../../shared/provider/GoalDistanceProvider"
import { GoalPaceContext } from "../../shared/provider/GoalPaceProvider"
import { GoalTimeContext } from "../../shared/provider/GoalTimeProvider"
import "./GoalForm.css"

function GoalForm() {
    const [distanceState, setDistanceState] = useState();
    const [paceState, setPaceState] = useState();
    const [timeState, setTimeState] = useState();
    const [distance, setDistance] = useContext(GoalDistanceContext);
    const [pace, setPace] = useContext(GoalPaceContext);
    const [time, setTime] = useContext(GoalTimeContext);

    const handleDistanceSubmit = (event) => {
        setDistance(distanceState)
        setDistanceState("")
        event.preventDefault();
    }

    const handlePaceSubmit = (event) => {
        setPace(paceState)
        setPaceState("")
        event.preventDefault();
    }

    const handleTimeSubmit = (event) => {
        setTime(timeState)
        setTimeState("")
        event.preventDefault();
    }

    return (
        <div className="formWrapper">
            <div className="distanceText">
                <p>Distance Goal:</p>
            </div>
            <div className="distanceField">
                <form onSubmit={handleDistanceSubmit}>
                    <input
                        type="number"
                        value={distanceState}
                        onChange={(e) => setDistanceState(e.target.value)}
                    />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
            </div>
            <div className="paceText">
                <p>Pace:</p>
            </div>
            <div className="paceField">
                <form onSubmit={handlePaceSubmit}>
                    <input
                        type="number"
                        value={paceState}
                        onChange={(e) => setPaceState(e.target.value)}
                    />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
            </div>
            <div className="timeText">
                <p>Activity time:</p>
            </div>
            <div className="timeField">
                <form onSubmit={handleTimeSubmit}>
                    <input
                        type="number"
                        value={timeState}
                        onChange={(e) => setTimeState(e.target.value)}
                    />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default GoalForm