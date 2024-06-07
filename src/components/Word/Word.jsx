import styles from './Word.module.css'
import { useState } from 'react';

export default function Word(props) {
    const [pressed, setPressed] = useState(false)

    return (
        <div className={styles.word}>
            <h1>Girl</h1>
            <span>[ɡɜːl]</span>

            <div onClick={() => { setPressed(!pressed) }}
                className={pressed ? `${styles.pressed}` : `${styles.unpressed}`}></div>
        </div >
    )

}