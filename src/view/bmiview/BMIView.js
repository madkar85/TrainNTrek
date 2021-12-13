import React from 'react'
import './BMIView.css'
import BMICalculator from '../../components/bmiCalculator/BMICalculator'
import Footer from '../../components/footer/Footer'

const BMIView = () => {
  
    return (
        <>
            <div className="bmiView">
               <section className="bmiTextField">
                    <BMICalculator />
               </section>
            </div>
            <Footer />
        </>
    )
}

export default BMIView
