import React, { Component } from 'react';
import './result_style.css'

export default class index extends Component {
    render() {
        return (
            <div className="result">
                <h4>
                    {this.props.recordCalc.firstNum} {this.props.recordCalc.selectOperator} {this.props.recordCalc.secondNum}{' '}
                </h4>
                <h5>Result</h5>

                <h4>{this.props.recordCalc.resultValue}</h4>
            </div>
        )
    }
}
