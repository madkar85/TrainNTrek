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
                    <div className='ruleHeading'>
                        <h3>Rule 1: Pay attention</h3>
                        <p className='nutritionText'>You might be surprised how many active adults overlook the
                        importance of nutrition basics - and then run short on key nutrients.
                        Not getting enough vitamins, minerals and other nutrients can compromise 
                        your health and your performance.
                        Yet fueling up for activity is as easy as following the well-established
                        rules of a healthy diet: Eat plenty of fruits and vegetables, consume lean proteins,
                        eat healthy fats, get your whole-grain carbohydrates, and drink plenty of fluids,
                        especially water.</p>
                    </div>
                    <div className='ruleHeading'>
                        <h3>Rule 2: Fuel up (even if your goal is to lose weight)</h3>
                        <p className='nutritionText'>Give your body the energy it needs to do the job you want
                        - even if you are trying to lose weight.Skimping on nutrition can reduce muscle 
                        mass, lower bone density and cause fatigue. This puts you at risk of injury 
                        and illness, increases recovery time, causes hormonal problems, and, for 
                        women, menstrual issues. Make sure your diet plan supplies enough
                        nutrient-dense calories so you can exercise and stay injury-free and healthy.</p>
                    </div>
                    <div className='ruleHeading'>
                        <h3>Rule 3: Love carbs (you need them)</h3>
                        <p className='nutritionText'>Carbohydrates get a bad rap with some people. 
                        But research over the past 50 years has shown that carbs help your body during long and 
                        high-intensity exercise. In fact, the more active you are, the more carbs you need.
                        But what about the trend for athletes to eat high-fat, low-carb diets? Evidence suggests 
                        these diets don't boost athletic performance and actually hinder it at higher intensities.
                        During a workout, carbohydrates fuel your brain and muscles.Carbs for the average 
                        workout - If you are in good shape and want to fuel a daily, light-intensity 
                        workout, eat about 3 to 5 grams of carbohydrates for every kilogram of body 
                        weight. For someone who weighs 150 pounds (68 kilograms) that's between 200 and 
                        340 grams a day. Carbs for longer workouts - If you exercise more than an hour a 
                        day, you may need 6 to 10 grams of carbs per kilogram of body weight.
                        For a 150-pound person, that's 408 to 680 grams a day. Pick healthy carbs
                        like brown rice, quinoa, whole-grain bread and pasta, sweet potatoes, fruits,
                        and vegetables.</p>
                    </div>
                    <div className='ruleHeading'>
                        <h3>Rule 4: Rebuild with protein</h3>
                        <p className='nutritionText'>Protein is important because it provides the amino 
                        acids your body needs to build and repair muscle. Most research suggests very 
                        active people should eat 1.2 to 2 grams of protein per kilogram of body weight. 
                        That means a 150-pound person should eat 82 to 136 grams each day. People who 
                        aren't active should eat less protein. Aim for .8 grams per kilogram of body 
                        weight each day. Good sources of protein are poultry (25 grams in 3 ounces)
                        and fish (20 grams in 3 ounces). Those who prefer to avoid meat can try soybeans
                        (20 grams per cup) and legumes like beans, peanuts and chickpeas (about 15 grams
                        per cup). Eggs, Greek yogurt, cheese and tofu are good sources, too.</p>
                    </div>
                    <div className='ruleHeading'>
                        <h3>Rule 5: Don't ignore fats</h3>
                        <p className='nutritionText'>Fat is a confusing topic for many people. But it's 
                        essential to a healthy diet. Fat provides energy and helps your body absorb 
                        vitamins. Some vitamins (like A, D, E and K) actually need fat to properly benefit
                        your body. Be sure to pick unsaturated fats. Good sources are avocado, olive and
                        canola oils, flaxseed and nuts.</p>
                    </div>
                    <div className='ruleHeading'>
                        <h3>Rule 6: Know what you need pre-workout</h3>
                        <p className='nutritionText'>If you work out less than an hour at a time, eating 
                        throughout the day should give you enough energy. However, to avoid GI issues, 
                        you may want to avoid eating right before you exercise. As a general rule, eat
                        one to three hours before your workout, even if you are going to do sustained, high-intensity activity, like a half marathon.</p>
                    </div>
                    <div className='ruleHeading'>
                        <h3>Rule 7: Remember the post-workout 15</h3>
                        <p className='nutritionText'>Your body uses its stored energy sources during a 
                        workout. After you exercise, you need to restore those nutrients as soon as 
                        possible. Research suggests that eating foods high in protein after your workout
                        (within 15 minutes), provides essential amino acids that build and repair muscles.
                        This may also increase the energy your body puts into storage to draw from in the
                        future. You'll want to replenish your carbs and fluids after your workout, too.
                        One strategy is to drink a post-workout smoothie.</p>
                    </div>
                </div>
                <div className='recipes'>
                    <h2>Links for recipes and inspiration</h2>
                    <div className="inspirationBox">
                        <h3>Madeleine Rybeck</h3>
                        <p>Madeleine is a swedish personal trainer who has her own website.
                        Here you can find advice regarding for different exercises and inspiration and
                        tips regarding diet and overall recipes for healthy food. She specialises in womens health.</p>
                        <a href="https://www.lifeatcore.com/category/kost/">Life at core - diet and recipes</a>
                        <a href="https://www.lifeatcore.com/">Life at core - homepage</a>
                    </div>

                </div>
            </div>
       </div>
      
    )
}

export default FoodView
