import React from "react"
import "./GoalView.css"
import Footer from "../../components/footer/Footer"
import GoalMenu from "../../components/goalMenu/GoalMenu"
import GoalForm from "../../components/goalForm/GoalForm"
import GoalResult from "../../components/goalResult/GoalResult"

const GoalView = () => {

    return (
        <>
            <div className="goalView">
                <section className="textField">
                    <h1>Set your personal Goals!</h1>
                    <GoalForm />
                    <GoalResult />
                </section>
                <Footer />
            </div>
        </>
    )
}

export default GoalView