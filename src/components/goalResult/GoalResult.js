import { React, useContext } from 'react'
import "./GoalResult.css"
import { GoalDistanceContext } from "../../shared/provider/GoalDistanceProvider"

const GoalResult = () => {
    const [distance, setDistance] = useContext(GoalDistanceContext);

    function Placeholder() {
        if (distance == null) return 100;
        else return distance
    }

    return (
        <div className="goalFormWrapper">
            <div className="header1">
                <p> Type </p>
            </div>
            <div className="header2">
                <p> Actual / Goal </p>
            </div>
            <div className="goalType">
                <p> Distance Goal: </p>
                <p> Average Pace: </p>
                <p> Activity time: </p>
            </div>
            <div className="goalValue">
                <p> 1/{Placeholder()} </p>
                <p> 12/10 </p>
                <p> 15/10 </p>
            </div>
        </div>
    )
}

export default GoalResult