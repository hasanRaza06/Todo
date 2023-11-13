import React from "react";
import './NewExpense.css';
import FormData from "./FormData";

const NewExpense=(props)=>{

    const saveExpenseDatahandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return(
        <>
            <div className="new-expense">
            <FormData onSaveExpenseData={saveExpenseDatahandler}/> 
            </div>
        </>
    );

}

export default NewExpense;