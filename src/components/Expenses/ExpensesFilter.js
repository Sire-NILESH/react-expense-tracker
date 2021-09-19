import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const currentYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  //   const [selectedYear, setSelectedYear] = useState("2022");

  props.getSelectedYearFilter(selectedYear);
  const setSelectedYearHandler = (e) => {
    setSelectedYear(e.target.value);
    //props.getSelectedYearFilter(selectedYear); //is the 2nd last updated state and not the latest
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select defaultValue={currentYear}>
          <option value="2022" onClick={setSelectedYearHandler}>
            2022
          </option>
          <option value="2021" onClick={setSelectedYearHandler}>
            2021
          </option>
          <option value="2020" onClick={setSelectedYearHandler}>
            2020
          </option>
          <option value="2019" onClick={setSelectedYearHandler}>
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
