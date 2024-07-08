import styles from './Word.module.css'
import { useState, useEffect, useRef } from 'react';

export default function Word({ word, handleClick }) {
    const { id, english, transcription, russian } = word;
    const btnRef = useRef();

    const [translite, setTranslite] = useState(false);

    useEffect(() => {
        btnRef.current.focus();
    }, [id]);

    useEffect(() => {
        setTranslite(false);
    }, [id]);

    return (
        <div>
            <div className={styles.word} >
                <p>{english}</p>
                <span>{transcription}</span>
                {translite
                    ? <p className={styles.translite} onClick={() => handleClick(id)}>{russian}</p>
                    : (<button className={styles.transliteBtn}
                        onClick={() => {
                            handleClick(id);
                            setTranslite(!translite)
                        }}
                        ref={btnRef}>Проверить</button>)}
            </div >
        </div>
    )

}