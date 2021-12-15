import "./ExerciseCard.css"

const SettingsForm = (props) => {
    return (
        <>
            <div className="exerciseCard">
                <h1 className="exerciseName">{props.exercise}</h1>
                <img src={props.image}></img>
                <h3 className="target">Target muscles: {props.target}</h3>
                <div className="exerciseDescription">
                <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default SettingsForm