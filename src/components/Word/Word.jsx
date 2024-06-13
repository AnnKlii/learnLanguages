import styles from './Word.module.css'
import { useState } from 'react';

export default function Word(props) {
    const [pressed, setPressed] = useState(false)

    return (
        <div className={styles.word}>
            <p>Girl</p>
            <span>[ɡɜːl]</span>

            <div onClick={() => { setPressed(!pressed) }}
                className={pressed ? `${styles.pressed}` : `${styles.unpressed}`}></div>
        </div >
    )

}