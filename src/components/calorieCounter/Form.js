import React, { Component } from "react";
import "./Form.css";

const shortid = require("shortid");

// Class for handling the form to add Meal.
export default class Form extends Component {
  state = {
    showform: false,
    text: "",
    calorie: "",
  };

  // Method that toggles the view when Add Meal is pushed.
  toggleChange = () => {
    this.setState({
      showform: !this.state.showform,
    });
  };

  // Method that handles the view after Add Meal is pushed.
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Method for when you push Save.
  handleSubmit = (event) => {
    let pattern = /^([A-Za-z])+$/u;
    event.preventDefault();
    if (this.state.calorie == "" || this.state.text == "") {
      alert("Woops, the field can not be blank. Please enter a value ");
    } else if (
      this.state.text !== "" &&
      pattern.test(this.state.text) == false
    ) {
      alert("Woops, please enter only alphabetical letters for the meal");
    } else {
      this.props.onsubmit({
        id: shortid.generate(),
        text: this.state.text,
        calorie: parseInt(this.state.calorie),
      });
      this.setState({
        text: "",
        calorie: "",
      });
    }
  };

  // Render method.
  render() {
    if (this.state.showform === false) {
      return (
        <React.Fragment>
          <form onClick={this.toggleChange}>
            <button type="button" className="addButton">
              Add Meal
            </button>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <form className="dietForm" onSubmit={this.handleSubmit}>
            <div className="formgroup-grid">
              <label className="tag">Meal:</label>
              <div className="form-group">
                <input
                  name="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                  className="formInput"
                  id="email"
                />
              </div>
              <label className="tag">Cals:</label>
              <div className="form-group">
                <input
                  name="calorie"
                  value={this.state.calorie}
                  onChange={this.handleChange}
                  type="number"
                  className="formInput"
                  id="pwd"
                />
              </div>
            </div>
            <div id="btns">
              <button onSubmit={this.handleSubmit} className="saveBtn">
                Save
              </button>
              <button onClick={this.toggleChange} className="cancelBtn">
                Cancel
              </button>
            </div>
          </form>
        </React.Fragment>
      );
    }
  }
}
