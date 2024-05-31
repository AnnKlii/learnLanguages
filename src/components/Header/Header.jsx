import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <h1>Learn Languages</h1>
            <button>Log in</button>
        </header>
    )
}
export default Header;