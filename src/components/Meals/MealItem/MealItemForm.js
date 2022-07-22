import { useRef, useState } from 'react'

import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'

const MealItemForm = props => {
    const [isValid, setIsValid] = useState(true)
    const inputAmountRef = useRef();

    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = inputAmountRef.current.value
        const enteredAmountNumber = +enteredAmount
        if(enteredAmount.trim().length === 0){
            setIsValid(false)
            return
        }
        inputAmountRef.current.value = 1
        props.onAddToCart(enteredAmountNumber)
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <Input 
                ref= {inputAmountRef}
                label= "Amount" input={{
                id: props.id,
                type: 'number',
                min: '1',
                max: '7',
                step: '1',
                defaultValue: '1',
            }}/>
            <button>+ Add</button>
            {!isValid && <p>Please Enter a Valid Amount(1-7).</p>}
        </form>
    )
}

export default MealItemForm