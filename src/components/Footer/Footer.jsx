import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={styles.footerWrp}>
            <div className={styles.footer}>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/game'>Карточки слов</NavLink>
                {/* <NavLink to='/'>Выученные слова</NavLink> */}
                <NavLink to='/table'>Список слов</NavLink>
            </div>
        </footer>
    )
}