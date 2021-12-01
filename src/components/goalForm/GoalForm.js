import React, { useState, useContext } from 'react'
import { GoalDistanceContext } from "../../shared/provider/GoalDistanceProvider"
import { GoalPaceContext } from "../../shared/provider/GoalPaceProvider"
import { GoalTimeContext } from "../../shared/provider/GoalTimeProvider"
import "./GoalForm.css"

function GoalForm() {
    const [distance, setDistance] = useContext(GoalDistanceContext);
    const [pace, setPace] = useContext(GoalPaceContext);
    const [time, setTime] = useContext(GoalTimeContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(distance);
    }

    return (
        <div className="formWrapper">
            <div className="distanceText">
                <p>Distance Goal:</p>
            </div>
            <div className="distanceField">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                    />
                    <input type="submit" />
                </form>
            </div>
            <div className="paceText">
                <p>Pace:</p>
            </div>
            <div className="paceField">
                <form form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={pace}
                        onChange={(e) => setPace(e.target.value)}
                    />
                    <input type="submit" />
                </form>
            </div>
            <div className="timeText">
                <p>Activity time:</p>
            </div>
            <div className="timeField">
                <form form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default GoalForm