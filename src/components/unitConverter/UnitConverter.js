import { useState, useEffect } from 'react'
import './UnitConverter.css'

// Unit converter showed in the stats view

const UnitConverter = () => {
  const { ConvertKmPerHourToMeterPerSecond } = require('./CalculateConversions')
  const { ConvertMeterPerSecondToKmPerHour } = require('./CalculateConversions')
  const { ConvertKmToMiles } = require('./CalculateConversions')
  const { ConvertMilesToKm } = require('./CalculateConversions')
  const { ConvertKiloToPound } = require('./CalculateConversions')
  const { ConvertPoundToKilo } = require('./CalculateConversions')

  const [unitOne, setUnitOne] = useState(0)
  const [selectedOption, setselectedOption] = useState('km/h to m/s')

  const Calculate = () => {
    let result

    if (unitOne >= 0) {
      if (selectedOption === 'km/h to m/s') {
        result = ConvertKmPerHourToMeterPerSecond(unitOne)
      } else if (selectedOption === 'm/s to km/h') {
        result = ConvertMeterPerSecondToKmPerHour(unitOne)
      } else if (selectedOption === 'km to miles') {
        result = ConvertKmToMiles(unitOne)
      } else if (selectedOption === 'miles to km') {
        result = ConvertMilesToKm(unitOne)
      } else if (selectedOption === 'kilo to pound') {
        result = ConvertKiloToPound(unitOne)
      } else if (selectedOption === 'pound to kilo') {
        result = ConvertPoundToKilo(unitOne)
      }

      return <div className='output'>{result.toFixed(2)}</div>
    } else {
      alert('Woops, value is not allowed to be negative')
      return 'Value is negative'
    }
  }

  return (
    <div className='converterWrapper'>
      <h1 className='title'>Convert</h1>

      <input
        className='inputField'
        placeholder='Write here'
        type='number'
        onChange={(event) => setUnitOne(event.target.value)}
      />

      <select
        className='optionDropDown'
        onChange={(event) => setselectedOption(event.target.value)}
      >
        <option value='km/h to m/s'>km/h to m/s</option>
        <option value='m/s to km/h'>m/s to km/h</option>
        <option value='km to miles'>km to miles</option>
        <option value='miles to km'>miles to km</option>
        <option value='kilo to pound'>kilo to pound</option>
        <option value='pound to kilo'>pound to kilo</option>
      </select>

      <div className='equalSign'>=</div>
      {Calculate()}
    </div>
  )
}

export default UnitConverter
