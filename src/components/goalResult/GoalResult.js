import { React, useContext } from 'react'
import './GoalResult.css'
import { GoalDistanceContext } from '../../shared/provider/GoalDistanceProvider'
import { GoalPaceContext } from '../../shared/provider/GoalPaceProvider'
import { GoalTimeContext } from '../../shared/provider/GoalTimeProvider'
import { SportTypeContext } from '../../shared/provider/SportTypeProvider'

// Comonent that shows the status of activity goals

const GoalResult = () => {
    const [pace, setPace] = useContext(GoalPaceContext)
    const [time, setTime] = useContext(GoalTimeContext)
    const [distance, setDistance] = useContext(GoalDistanceContext)
    const [sport, setSport] = useContext(SportTypeContext)

    function DistanceGoal() {
        if (distance == null) return 0;
        else return distance
    }
    function PaceGoal() {
        if (pace == null) return 0;
        else return pace
    }
    function TimeGoal() {
        if (time == null) return 0;
        else return time
    }
    function DistanceMock() {
        if (sport === 'Running') return 8;
        if (sport === 'Cycling') return 20;
        if (sport === 'Hiking') return 4;
        else return 0
    }
    function PaceMock() {
        if (sport === 'Running') return 2;
        if (sport === 'Cycling') return 5;
        if (sport === 'Hiking') return 1;
        else return 0
    }
    function TimeMock() {
        if (sport === 'Running') return 8;
        if (sport === 'Cycling') return 5;
        if (sport === 'Hiking') return 2;
        else return 0
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
                <p> {DistanceMock()}/{DistanceGoal()} km</p>
                <p> {PaceMock()}/{PaceGoal()} m/s</p>
                <p> {TimeMock()}/{TimeGoal()} h</p>
            </div>
        </div>
    )
}

export default GoalResult
