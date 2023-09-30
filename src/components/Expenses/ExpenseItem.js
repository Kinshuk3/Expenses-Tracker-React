import React, { useState } from 'react';
import './ExpenseItem.css'
import './ExpenseDate'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    // first element is current state value, second is function for updating that value
    const [title, setTitle] = useState(props.title) // this is a hook
    
    const clickHandler = () =>{
        setTitle('New title')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}> Change Title</button>
        </Card>
    )
}

export default ExpenseItem;