import React, { Component } from "react";
import "./ShowTable.css";

export default class ShowTable extends Component {
  render() {
    const dataDrinks = this.props.listDrinks;
    return (
      <div className="drinks__table">
        <h3 className="drinks__table-title">List of Drinks</h3>
        <section className="table-section">
          <div className="drinks_number">
            (Number of drinks: <span>{dataDrinks.length}</span>)
          </div>
          <table className="table-content">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
            </tr>
            {dataDrinks.map((value) => {
              return (
                <tr key={value.idDrink}>
                  <td style={{ color: "var(--primary-color)" }}>
                    {value.idDrink}
                  </td>
                  <td className="table-content-img">
                    <img src={value.strDrinkThumb} />
                  </td>
                  <td>{value.strDrink}</td>
                </tr>
              );
            })}
          </table>
        </section>
      </div>
    );
  }
}
