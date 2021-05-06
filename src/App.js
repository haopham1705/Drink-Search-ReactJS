import "./App.css";
import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import SearchDrinks from "./components/SearchDrinks";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: false,
    };
  }
  render() {
    const { isLogIn } = this.state;
    return (
      <div>
        <div className="App">
          {isLogIn ? (
            <SearchDrinks />
          ) : (
            <LoginForm
              logInCallback={() =>
                this.setState({
                  isLogIn: true,
                })
              }
            />
          )}
        </div>
      </div>
    );
  }
}
