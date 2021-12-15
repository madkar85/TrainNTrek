import ExerciseCard from "../../components/exerciseCard/ExerciseCard"
import Footer from "../../components/footer/Footer"
import './ExerciseView.css'
import bentRow from '../../shared/img/bentRow.jpg'
import shoulderPress from '../../shared/img/shoulderPress.jpg'
import LyingTriceps from '../../shared/img/LyingTriceps.jpg'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import RoutingPath from "../../routes/RoutingPath"

const Arms = () => {

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
            <ExerciseCard exercise="Bent-over row" image={bentRow} target="Back, as well as the shoulders, biceps, and core" text="Stand with your feet hip- to shoulder-width apart, holding a dumbbell in each hand.
            Brace your core, push your hips back, bend your knees slightly, and lower your torso until it’s nearly parallel to the floor.
            Let the dumbbells hang at arms length with your palms facing back. Engage your shoulder blades to keep your shoulders pulled back (i.e., don’t hunch). This is the starting position.
            Without moving your torso, and while keeping your chin and elbows tucked and back flat, row the weights to the outsides of your ribcage as you squeeze your shoulder blades together.
            Pause, and then lower the weights back to the starting position."/>

            <ExerciseCard exercise="Shoulder Press" image={shoulderPress} target="Shoulders, upper back, and triceps" text="Stand tall with your feet hip-width apart, and hold a pair of dumbbells in front of your shoulders with your elbows tucked and palms facing each other.
            Press the weights directly above your shoulders until your arms are straight and your biceps are next to your ears.
            Pause, and then lower the weights back to the starting position."/>

            <ExerciseCard exercise="Lying triceps extension" image={LyingTriceps} target="Triceps" text="Lie face up on a bench with your feet flat on the floor, and hold a pair of dumbbells above your chest with your arms straight and your palms facing each other.
            Without moving your upper arms, bend your elbows and lower the dumbbells to the sides of your head until your forearms dip below parallel to the floor.
            Pause, and then return to the starting position."/>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Arms