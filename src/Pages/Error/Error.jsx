import styles from './Error.module.css';
import home from '../../assets/img/home.jpg';

export default function Error() {
    return (
        <figure className={styles.error}>
            <img src={home} alt='Welcome image' />
        </figure>
    )
}