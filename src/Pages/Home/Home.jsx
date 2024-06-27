import styles from './Home.module.css';
import image from '../../assets/img/home.jpg';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.wrapper}>
                <section>
                    <h1>Hello</h1>
                    <div>About project</div>
                </section>
                <section>
                    <figure><img src={image} alt="Welcome image" /></figure>
                </section>
            </div>
        </div>
    )
}