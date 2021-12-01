const {ConvertKmPerHourToMeterPerSecond} = require('./CalculateConversions')
const {ConvertMeterPerSecondToKmPerHour} = require('./CalculateConversions')
const {ConvertKmToMiles} = require('./CalculateConversions')
const {ConvertMilesToKm} = require('./CalculateConversions')
const {ConvertKiloToPound} = require('./CalculateConversions')
const {ConvertPoundToKilo} = require('./CalculateConversions')

describe("Testing unit converter, with correct data, should be equal", () => {

    test('converts km/h to m/s', () => {
        expect(ConvertKmPerHourToMeterPerSecond(1)).toEqual(0.277777778)
    })

    test('converts m/s to km/h', () => {
        expect(ConvertMeterPerSecondToKmPerHour(1)).toEqual(3.6)
    })

    test('converts km to miles', () => {
        expect(ConvertKmToMiles(1)).toEqual(0.621371192 )
    })

    test('converts miles to km', () => {
        expect(ConvertMilesToKm(1)).toEqual(1.609344 )
    })

    test('converts kilo to pound', () => {
        expect(ConvertKiloToPound(1)).toEqual(2.20462262 )
    })

    test('converts pound to kilo', () => {
        expect(ConvertPoundToKilo(1)).toEqual(0.45359237 )
    })

    test('converts pound to kilo', () => {
        expect(ConvertPoundToKilo(-5)).toEqual(0)
    })
   
})

describe("Testing unit converter, with wrong data, should not be equal", () => {

    test('converts km/h to m/s', () => {
        expect(ConvertKmPerHourToMeterPerSecond(2)).not.toEqual(0.277777778)
    })

    test('converts m/s to km/h', () => {
        expect(ConvertMeterPerSecondToKmPerHour(2)).not.toEqual(3.6)
    })

    test('converts km to miles', () => {
        expect(ConvertKmToMiles(2)).not.toEqual(0.621371192 )
    })

    test('converts miles to km', () => {
        expect(ConvertMilesToKm(2)).not.toEqual(1.609344 )
    })

    test('converts kilo to pound', () => {
        expect(ConvertKiloToPound(2)).not.toEqual(2.20462262 )
    })

    test('converts pound to kilo', () => {
        expect(ConvertPoundToKilo(2)).not.toEqual(0.45359237 )
    })

})