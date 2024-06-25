import styles from './Word.module.css'
import { useState, useEffect } from 'react';

export default function Word(words) {
    const { english, transcription, russian, id } = words

    const [translite, setTranslite] = useState(false)
    const [studiedWords, setStudiedWords] = useState(0)
    const [studiedWordsId, setStudiedWordsId] = useState([])

    useEffect(() => setTranslite(false), [id])

    const handleClick = () => {
        setTranslite(true)

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
                    ? <p className={styles.translite} onClick={() => { setTranslite(false) }}>{russian}</p>
                    : (<button className={styles.transliteBtn} onClick={handleClick}>Check</button>)}
            </div >
            <p className={styles.studied}>Выучено слов {studiedWords}</p>
        </div>
    )

}