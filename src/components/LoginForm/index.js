import React, { Component } from "react";

import SearchDrinks from "../SearchDrinks";
import "./login_style.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
    };
  }
  handleSubmit = (e) => {
    const VALUE_DEFAULT = "admin";
    e.preventDefault();
    if (
      this.state.userName === VALUE_DEFAULT &&
      this.state.passWord === VALUE_DEFAULT
    ) {
      if (this.props.logInCallback) {
        this.props.logInCallback();
      }
    } else {
      alert("Password or Username incorrect");
    }
  };

  render() {
    return (
      <div>
        <form action="#" className="form-login">
          <h1 className="head-title">Welcome</h1>
          <input
            id="username"
            className="input-text"
            placeholder="Username"
            type="text"
            required
            onChange={(inputValue) =>
              this.setState({ userName: inputValue.target.value })
            }
          />

          <input
            id="password"
            className="input-text"
            placeholder="Password"
            type="password"
            required
            onChange={(inputValue) =>
              this.setState({ passWord: inputValue.target.value })
            }
          />
          <button
            id="submit-login"
            className="btn-login btn"
            onClick={this.handleSubmit}
          >
            Log In
          </button>
        </form>

        {/* {this.state.checkLogin ? (
          <div>
            <SearchDrinks />
            <DisplayUser infoUser={this.state} />
            <Calculator />
          </div>
        ) : (
          <div></div>
        )} */}
      </div>
    );
  }
}
