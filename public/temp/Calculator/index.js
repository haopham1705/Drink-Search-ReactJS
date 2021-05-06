import React, { Component } from "react";
// import Result from "../Result";
// import "./calculator_style.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: "",
      secondNum: "",
      selectOperator: "",
      resultValue: "",
    };
  }

  calculateResult = () => {
    let firstValue = this.state.firstNum * 1;
    let secondValue = this.state.secondNum * 1;

    if (this.state.firstNum !== "" && this.state.secondNum !== "") {
      switch (this.state.selectOperator) {
        case "+":
          return this.setState({
            resultValue: firstValue + secondValue,
          });
        case "-":
          return this.setState({
            resultValue: firstValue - secondValue,
          });
        case "*":
          return this.setState({
            resultValue: firstValue * secondValue,
          });
        case "/":
          return this.setState({
            resultValue: firstValue / secondValue,
          });
        default:
          return this.setState({
            resultValue: "",
          });
      }
    }
  };
  render() {
    return (
      <div className="calculator">
        <h1 className="head-title">Calculation</h1>
        <div className="input-value">
          <input
            onChange={(firstInput) =>
              this.setState({ firstNum: firstInput.target.value })
            }
            placeholder="Value 1"
            type="number"
          />
          <div className="select-operator">
            <label>Select Operator</label>
            <select
              onChange={(selectOperator) =>
                this.setState({ selectOperator: selectOperator.target.value })
              }
            >
              <option value="">select</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">x</option>
              <option value="/">:</option>
            </select>
          </div>
          <input
            onChange={(secondInput) =>
              this.setState({ secondNum: secondInput.target.value })
            }
            placeholder="Value 2"
            type="number"
          />
        </div>
        <button onClick={this.calculateResult}>Caculate</button>

        {/* <Result resultValue={this.state.resultValue} recordCalc={this.state} /> */}
      </div>
    );
  }
}
