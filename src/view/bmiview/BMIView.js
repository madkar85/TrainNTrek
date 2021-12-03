import React from "react"
import "./BMIView.css"
import BMICalculator from "../../components/bmiCalculator/BMICalculator"
import Footer from "../../components/footer/Footer"


const BMIView = () => {

    return (
        <>
            <div className="bmiView">
            <section className="textField">
                    <h1> Modify the values and ckick the Calculate button to use</h1>
                    <BMICalculator />
                </section>
                <Footer />
            </div>
        </>
    )
}

export default BMIView