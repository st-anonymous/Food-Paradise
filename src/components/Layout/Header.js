import {Fragment} from 'react'

import HeaderCartButton from './HeaderCardButton'

import headerImage from '../../assets/header_image.jpg'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Food Paradise</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={headerImage} alt="Header" />
            </div>
        </Fragment>
    )
}

export default Header;