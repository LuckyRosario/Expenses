import React, { useState } from 'react';

import "./ExpenseForm.css";

export default function ExpenseForm(props){

 const[enteredTitle, setEnteredTitle] = useState('')
 const[enteredAmount, setEnteredAmount] = useState('')
 const[enteredDate, setEnteredDate] = useState('');
   // const [userInput, setUserInput] = useState({
   //     enteredTitle: '',
   //     enteredAmount: '',
   //     enteredDate: ''
    //});

    function titleChangeHandler(event){
       return setEnteredTitle(event.target.value);
     // return( 
         // setUserInput({
         //  ...userInput,
         //  enteredTitle: event.target.value,
      // })
     // setUserInput((prevState) => {
     //     return { ...prevState, enteredTitle: event.target.value }
     // })
     //  )
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
       //setUserInput({
       //    ...userInput,
       //    enteredAmount: event.target.value,
       //})
    }

    const dateChangeHandler = (event) => {
       setEnteredDate(event.target.value)
        //setUserInput({
        //   ...userInput,
        //   enteredDate: event.target.value,
        //})
    }
const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
};
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"  value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
            </div>
            
        </form>
    )
}