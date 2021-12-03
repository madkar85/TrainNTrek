import React from "react"
import "./BMIView.css"
import Footer from "../../components/footer/Footer"


const BMIView = () => {

    return (
        <>
            <div className="bmiView">
                <section className="textField">
                    <h1>Calculate the BMI here!</h1>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default BMIView