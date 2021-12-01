import { useState, useEffect } from "react";
import "./UnitConverter.css";

const UnitConverter = () => {
  const [unitOne, setUnitOne] = useState(0);
  const [selectedOption, setselectedOption] = useState("from km/h to m/s");

  const Calculate = () => {
    let result;
    
    if (selectedOption == "from km/h to m/s") {
      result = ConvertKmPerHourToMeterPerSecond();
    } else if (selectedOption == "from m/s to km/h") {
      result = ConvertMeterPerSecondToKmPerHour();
    } else if (selectedOption == "from km to miles") {
      result = ConvertKmToMiles();
    } else if (selectedOption == "from miles to km") {
      result = ConvertMilesToKm();
    } else if (selectedOption == "from kilo to pound") {
      result = ConvertKiloToPound();
    } else if (selectedOption == "from pound to kilo") {
      result = ConvertPoundToKilo();
    }

    return <div>{result.toFixed(2)}</div>;
  };

  const ConvertKmPerHourToMeterPerSecond = () => {
    return unitOne * 1 * 0.277777778;
  };

  const ConvertMeterPerSecondToKmPerHour = () => {
    return unitOne * 1 * 3.6;
  };

  const ConvertKmToMiles = () => {
    return unitOne * 1 * 0.621371192;
  };

  const ConvertMilesToKm = () => {
    return unitOne * 1 * 1.609344;
  };

  const ConvertKiloToPound = () => {
    return unitOne * 1 * 2.20462262;
  };

  const ConvertPoundToKilo = () => {
    return unitOne * 1 * 0.45359237;
  };

  return (
    <div className="converterWrapper">
      <h1>Convert</h1>

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
