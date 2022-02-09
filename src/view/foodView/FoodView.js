import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import RoutingPath from "../../routes/RoutingPath"
import './FoodView.css'

const FoodView = () => {
    const history = useHistory();

    return (
       <div className='foodView'>
            <h1 className='foodHeading'>Food facts and inspiration</h1>
            <p>If your goal is to lose weight, remember that you still need to not only eat healthy but
            also make sure you eat enough. That means make sure you et enought protein, vitamins,
            minerals and fats in your diet. This page helps you both with information about nutrition
                and recipe inspiration</p>
            <div className='contentLayout'>
                <div className='nutritionFacts'>
                    <h2>Nutrition</h2>
                    <p>Test test</p>
                </div>
                <div className='recipes'>
                    <h2>Links for recipes</h2>
                    <p>Test test</p>
                </div>
            </div>
       </div>
      
    )
}

export default FoodView
