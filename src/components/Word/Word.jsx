import styles from './Word.module.css'
import { useState, useEffect } from 'react';

export default function Word({ english, transcription, russian, id }) {
    const [translite, setTranslite] = useState(false)
    useEffect(() => setTranslite(false), [id])

    return (
        <div className={styles.word}>
            <p>{english}</p>
            <span>{transcription}</span>
            {translite
                ? <p className={styles.translite} onClick={() => { setTranslite(false) }}>{russian}</p>
                : (<button className={styles.transliteBtn} onClick={() => setTranslite(true)}>Check</button>)}
        </div >
    )

}