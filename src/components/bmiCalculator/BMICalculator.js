import React, { useState } from "react";
import "./BMICalculator.css"

const BMICalculator = () => {
                          
  const [text, settext] = useState();
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [infoText, setInfoText] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const { CalculateBMI } = require("./CalculateBMI");

  const PrintInfo = (val) => {
      if (val < 18.5) {
        setInfo("Under Weight");
        setInfoText("Being underweight could be a sign you're not eating enough or you may be ill.");
        return "Under Weight";
      } else if (val > 18.5 && val <= 24.9) {
        setInfo("Healthy weight");
        setInfoText("Keep up the good work! For tips on maintaining a healthy weight, check out the diet and fitness sections.");
        return "Healthy weight";
      } else if (val > 24.9 && val < 30) {
        setInfo("Overweight");
        setInfoText("The best way to lose weight if you're overweight is through a combination of diet and exercise.");
        return "Overweight";
      } else {
        setInfo("Obese");
        setInfoText("The best way to lose weight if you're obese is through a combination of diet and exercise, and in some cases, medicines.");
        return "Obese";
      }
  };

  const handleBmi = () => {
    let value
    if( weight == null || height == null )
    {
      alert("Woops, the field can not be blank. Please enter a value ")
      return "value is not valid";
    }
    if( weight <= 0 || height <=0  )
    {
      alert("Woops, the value of weight and height must be greater than 0 ")
      return "value is not valid";
    }
    value = CalculateBMI(weight,height);
    setBmi(value);
    settext("Your BMI is: ");
    PrintInfo(value); 
  };
  
  return (
    <div className="container">
    <div className="form-control">
      <div className="header-text"><h2>BMI-Calculatore</h2></div>
        <div className="header-text"> Modify the values and ckick the Calculate button to use.</div>
        <input 
        type="number"
        onChange={(e) => setHeight(e.target.value)}
        placeholder=" Enter you height in cm"
         />
    </div>
    <div className="form-control">
        <input 
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        placeholder=" Enter your weight in kg"
        />
    </div>
    <button className="btn btn-block" onClick={handleBmi} > Calculate </button>
    <div>
    <h1 className="bmi-text">{text} {bmi}</h1>
    <h3 className="bmi-text">{info}</h3>
    <div className="bmi-text">{infoText}</div>
    
    </div>

</div>
  );
};

export default BMICalculator;