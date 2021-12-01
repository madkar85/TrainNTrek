import React from "react";
import "./DietView.css";
import Footer from "../../components/footer/Footer";
import StravaApi from "../../shared/api/StravaApi";

// Main and home view

const DietView = () => {
  return (
    <>
      <StravaApi textInfo={false} />
      <div className="dietView">
        <section className="textField">
          <h2>
            Dietview
            <br />
          </h2>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default DietView;
