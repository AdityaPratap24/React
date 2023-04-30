import React,{useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import Shimmer from "../UI/Shimmer";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter((ele) => {
    return ele.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length != 0 ? filteredExpenses.map((ele) => {
        return (
          <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date}/>
        );
      }) : <Shimmer /> }
    </Card>
  );
};

export default Expenses;
