import ExerciseCard from "../../components/exerciseCard/ExerciseCard"
import Footer from "../../components/footer/Footer"
import './ExerciseView.css'
import hipRaise from '../../shared/img/hipRaise.jpg'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import RoutingPath from "../../routes/RoutingPath"

const Glutes = () => {
  const history = useHistory();
  return (
    <>
      <div className='exerciseView'>
        <h1 className="exerciseHeading">EXERCISES</h1>
        <div className='exerciseDropdown'>
      <p className="buttonHeading">Exercise Type</p>
      <div className='exercise-content'>
        <ul className='exerciseList'>
          <li> <button className='exerciseListbtn' onClick={ () => history.push(RoutingPath.exerciseView)}>All</button></li>
          <li> <button className='exerciseListbtn' onClick={ () => history.push(RoutingPath.coreView)}>Core</button></li>
          <li> <button className='exerciseListbtn' onClick={ () => history.push(RoutingPath.armsView)}>Arms</button> </li>
          <li> <button className='exerciseListbtn' onClick={ () => history.push(RoutingPath.legsView)}>Legs</button></li>
          <li> <button className='exerciseListbtn' onClick={ () => history.push(RoutingPath.glutesView)}>Glutes</button></li>
        </ul>
      </div>
    </div>
        <section id='exerciseConatiner'>

            <ExerciseCard exercise="Single-leg elevated-foot hip raise" image={hipRaise} target="Glutes, quads, hamstrings, and core" text="Lie on the floor with your arms by your sides, your right foot on a bench (or other immovable object), and your left foot elevated so your thighs are parallel.
            Squeeze your glutes and push through your right foot, raising your hips until your body forms a straight line from your right knee to your shoulders. Make sure to keep your hips parallel with the floor throughout the movement.
            Pause, then return to the starting position. Perform equal reps on both legs."/>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Glutes