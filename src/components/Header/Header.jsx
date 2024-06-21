import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerNav}>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/game'>Карточки слов</NavLink>
                {/* <NavLink to='/'>Выученные слова</NavLink> */}
                <NavLink to='/table'>Список слов</NavLink>
            </div>
            <div className={styles.headerMain}>
                <NavLink to='/' className={styles.logo}>
                    <img src="src/assets/img/logo.svg" />
                    <h1>Learn Languages</h1>
                </NavLink>
                <button>Log in</button>
            </div>

        </header>
    )
}
export default Header;