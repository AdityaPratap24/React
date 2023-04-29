import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((ele) => {
        return (
          <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />
        );
      })}
    </Card>
  );
};

export default Expenses;
