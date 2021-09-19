import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //   const [userInputs, setUserInputs] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const amountChangeHandler = (event) => {
  //     setUserInputs({
  //       ...userInputs,
  //       enteredAmount: event.target.value,
  //     });
  //     console.log(userInputs);
  //   };

  //   const dateChangeHandler = (event) => {
  //     //  setUserInputs({
  //     //    ...userInputs,
  //     //    enteredDate: event.target.value,
  //     //  });

  //     setUserInputs((pevState) => {
  //       return {
  //         ...userInputs,
  //         enteredDate: event.target.value,
  //       };
  //     });
  //   };

  //   const titleChangeHandler = (event) => {
  //     setUserInputs({
  //       ...userInputs,
  //       enteredTitle: event.target.value,
  //     });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);

    //passing that entered data up to parent: ExpenseForm -> NewExpense -> App.js
    props.onSaveExpenseData(expenseData);

    //clear all input fields by TWO WAY BINDING.
    setEnteredTitle(""); //this will be passed to built-in 'value' attribute
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-1-1"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
