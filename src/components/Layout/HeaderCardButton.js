import { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlight ] = useState(false)

    const cartCtx = useContext(CartContext);

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return
        }

        setBtnIsHighlight(true)

        const timer = setTimeout(() =>{
            setBtnIsHighlight(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }   
    }, [cartCtx.items])

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber+item.amount
    }, 0)

    const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

    return <button className={btnStyles} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton