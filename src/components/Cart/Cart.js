import { useContext, useState, useEffect } from 'react'

import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'

import styles from './Cart.module.css'
import CartItem from './CartItem'

let totalAmountOnOrder

const Cart = props => {
    const [isOrdered, setIsOrdered] = useState(false)

    useEffect(() => {

    }, [isOrdered])

    const cartCtx = useContext(CartContext)

    const hasItem = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({
            ...item,
            amount: 1
        })
    }

    const onOrderHandler = () => {
        totalAmountOnOrder = cartCtx.totalAmount.toFixed(2)
        cartCtx.clear()
        setIsOrdered(true)
    }

    const onClosingOrderModal = () => {
        props.onClose()
        setIsOrdered(false)
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map( item => 
            <CartItem 
                key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            >    
            </CartItem> 
        )}
    </ul>)

    let element = <Modal onClose={props.onClose} >
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{`₹${cartCtx.totalAmount.toFixed(2)}`}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose} >Close</button>
            {hasItem && <button className={styles.button} onClick={onOrderHandler} >Order</button>}
        </div>
    </Modal>
    
    if(isOrdered){
        element = <Modal onClose={onClosingOrderModal}>
            <div className={styles.order}><h2>Food Ordered! Total Amount is ₹{totalAmountOnOrder}</h2></div>
            <div className={styles.actions}><button className={styles['button--alt']} onClick={props.onClose} >Close</button></div>
        </Modal>
    }

    return (
        element
    )
}

export default Cart