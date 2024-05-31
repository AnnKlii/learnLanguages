import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="">Главная</a><a href="">Карточки слов</a><a href="">Выученные слова</a><a href="">Список слов</a>
        </footer>
    )
}