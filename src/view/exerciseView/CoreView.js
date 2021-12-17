import ExerciseCard from "../../components/exerciseCard/ExerciseCard"
import Footer from "../../components/footer/Footer"
import './ExerciseView.css'
import plank from '../../shared/img/plank.jpg'
import bentRow from '../../shared/img/bentRow.jpg'
import hipRaise from '../../shared/img/hipRaise.jpg'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import RoutingPath from "../../routes/RoutingPath"

const Core = () => {

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
            <ExerciseCard exercise="Plank" image={plank} target="Core" text="Assume a push-up position, but with your weight on your forearms instead of your hands (your elbows should be directly beneath your shoulders).
            Squeeze your glutes and brace your core (imagine someone is about to punch you in the gut) to lock your body into a straight line from head to heels.
            Hold for time."/>

            <ExerciseCard exercise="Bent-over row" image={bentRow} target="Back, as well as the shoulders, biceps, and core" text="Stand with your feet hip- to shoulder-width apart, holding a dumbbell in each hand.
            Brace your core, push your hips back, bend your knees slightly, and lower your torso until it’s nearly parallel to the floor.
            Let the dumbbells hang at arms length with your palms facing back. Engage your shoulder blades to keep your shoulders pulled back (i.e., don’t hunch). This is the starting position.
            Without moving your torso, and while keeping your chin and elbows tucked and back flat, row the weights to the outsides of your ribcage as you squeeze your shoulder blades together.
            Pause, and then lower the weights back to the starting position."/>

            <ExerciseCard exercise="Single-leg elevated-foot hip raise" image={hipRaise} target="Glutes, quads, hamstrings, and core" text="Lie on the floor with your arms by your sides, your right foot on a bench (or other immovable object), and your left foot elevated so your thighs are parallel.
            Squeeze your glutes and push through your right foot, raising your hips until your body forms a straight line from your right knee to your shoulders. Make sure to keep your hips parallel with the floor throughout the movement.
            Pause, then return to the starting position. Perform equal reps on both legs."/>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Core