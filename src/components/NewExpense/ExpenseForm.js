import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) =>{
        //-----OPTION 1-------
        setEnteredTitle(event.target.value)

        //-----OPTION 2A-------
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        //-----OPTION 2B (recommended option btw 2A and 2B), as with this we always get correct value of previous state-------
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }

    //--ALTERNATIVE to having multiple handlers together
    // const inputChangeHandler = (identifier, value) =>{
    //     if(identifier === 'title'){
    //         setEnteredTitle(value)
    //     }
    //     else if(identifier === 'date'){
    //         setEnteredDate(value)
    //     }
    //     else{
    //         setEnteredAmount(value)
    //     }
    // }

    const submitHandler = (event) =>{
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        
        props.onSaveExpenseData(expenseData) //child to parent communication bottom-up via call back function as a prop

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    {/* <input type='text' onChange={(event) => inputChangeHandler('tite', event.target.value)}/> */}
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    {/* Value: We gather user input and change it, it is called 2 way binding  */}
                    <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm