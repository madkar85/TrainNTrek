import { useState, useEffect } from "react";
import "./UnitConverter.css";

const UnitConverter = () => {
  const { ConvertKmPerHourToMeterPerSecond } = require("./CalculateConversions");
  const { ConvertMeterPerSecondToKmPerHour } = require("./CalculateConversions");
  const { ConvertKmToMiles } = require("./CalculateConversions");
  const { ConvertMilesToKm } = require("./CalculateConversions");
  const { ConvertKiloToPound } = require("./CalculateConversions");
  const { ConvertPoundToKilo } = require("./CalculateConversions");
  
  const [unitOne, setUnitOne] = useState(0);
  const [selectedOption, setselectedOption] = useState("from km/h to m/s");

  const Calculate = () => {
    let result;

    if(unitOne < 0) alert("Value can not be negative") //This happens twice right now, fix it 
    if (selectedOption == "from km/h to m/s") {
      result = ConvertKmPerHourToMeterPerSecond(unitOne);
    } else if (selectedOption == "from m/s to km/h") {
      result = ConvertMeterPerSecondToKmPerHour(unitOne);
    } else if (selectedOption == "from km to miles") {
      result = ConvertKmToMiles(unitOne);
    } else if (selectedOption == "from miles to km") {
      result = ConvertMilesToKm(unitOne);
    } else if (selectedOption == "from kilo to pound") {
      result = ConvertKiloToPound(unitOne);
    } else if (selectedOption == "from pound to kilo") {
      result = ConvertPoundToKilo(unitOne);
    }

    return <div>{result.toFixed(2)}</div>;
  };
  
  return (
    <div className="converterWrapper">
      <h1 className="title">Convert</h1>

      <input
        classname="inputField"
        placeholder="Write here"
        type="number"
        onChange={(event) => setUnitOne(event.target.value)}
      />

      <select
        className="optionDropDown"
        onChange={(event) => setselectedOption(event.target.value)}
      >
        <option value="from km/h to m/s">from km/h to m/s</option>
        <option value="from m/s to km/h">from m/s to km/h</option>
        <option value="from km to miles">from km to miles</option>
        <option value="from miles to km">from miles to km</option>
        <option value="from kilo to pound">from kilo to pound</option>
        <option value="from pound to kilo">from pound to kilo</option>
      </select>

      <div className="equalSign">=</div>
      {Calculate()}
    </div>
  );
};

export default UnitConverter;
