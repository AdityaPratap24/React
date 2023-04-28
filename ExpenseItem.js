import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const changeTitle = () => {
    console.log('Clicked')
  }

  const deleteTitle = () => {
    console.log('Delete')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
      <button onClick={deleteTitle}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
