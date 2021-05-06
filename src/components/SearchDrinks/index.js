import React, { Component } from "react";
import SearchField from "react-search-field";
import DisplayUser from "../DisplayUser";
import axios from "axios";
import ShowTable from "../ShowTable";
import "./SearchDrinks.css";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export default class SearchDrinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      msg: "Please search some drink !",
    };
  }
  componentDidMount() {
    this.handleGetDrinks();
  }
  handleGetDrinks = (nameDrink) => {
    if (nameDrink) {
      axios
        .get(`${API_URL}${nameDrink}`)
        .then((res) => {
          this.setState({
            drinks: res.data.drinks,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.setState({
        msg: "Please search name of the drink!",
      });
    }
  };
  render() {
    const { drinks, msg } = this.state;
    return (
      <div className="App">
        <div className="user-welcome">
          <h1>Drink Search</h1>
        </div>
        <SearchField
          onSearchClick={this.handleGetDrinks}
          onEnter={this.handleGetDrinks}
          placeholder="Please enter your drink !"
        />
        {drinks ? (
          <div>
            <ShowTable listDrinks={drinks} />
          </div>
        ) : (
          <p className="message-input">{msg}</p>
        )}
      </div>
    );
  }
}
