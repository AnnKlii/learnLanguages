import styles from './Word.module.css'
import { useState, useEffect, useRef } from 'react';

export default function Word(words) {
    const { english, transcription, russian, id } = words
    const btnRef = useRef();

    const [translite, setTranslite] = useState(false);
    const [studiedWords, setStudiedWords] = useState(0);
    const [studiedWordsId, setStudiedWordsId] = useState([]);

    // useEffect(() => setTranslite(false), [id]);
    useEffect(() => btnRef.current.focus(), [id]);

    const handleClick = () => {
        setTranslite(!translite)

        if (!studiedWordsId.includes(id)) {
            setStudiedWords(studiedWords + 1);
            setStudiedWordsId([...studiedWordsId, id]);
        }
        return studiedWordsId

    }

    return (
        <div>
            <div className={styles.word} key={id}>
                <p>{english}</p>
                <span>{transcription}</span>
                {translite
                    ? <p className={styles.translite} onClick={handleClick}>{russian}</p>
                    : (<button className={styles.transliteBtn} onClick={handleClick} ref={btnRef}>Проверить</button>)}
            </div >
            <p className={styles.studied}>Выучено слов {studiedWords}</p>
        </div>
    )

}