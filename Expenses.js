import React,{useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
      />
      {props.items.map((ele) => {
        return (
          ele.date.getFullYear().toString() === filteredYear ?<ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date}/> : " "
        );
      })}
      
       {/* {
        props.items.filter((ele) => {
          return ele.date === filteredYear ? <ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date}/> : " "
        })
       } */}
    </Card>
  );
};

export default Expenses;
