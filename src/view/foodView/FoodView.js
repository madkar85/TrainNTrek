import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import RoutingPath from "../../routes/RoutingPath"
import './FoodView.css'

const FoodView = () => {
    const history = useHistory();

    return (
       <div className='foodView'>
            <h1 className='foodHeading'>Food facts and inspiration</h1>
            <div className='nutritionFacts'>
                <h2>Nutrition</h2>
            </div>
            
       </div>
      
    )
}

export default FoodView
