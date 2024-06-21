import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.wrapper}>
                <section>
                    <h1>Hello</h1>
                    <div>About project</div>
                </section>
                <section>
                    <figure><img src="src/assets/img/3172798.jpg" alt="" /></figure>
                </section>
            </div>
        </div>
    )
}