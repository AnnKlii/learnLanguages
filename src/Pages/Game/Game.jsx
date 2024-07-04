import styles from './Game.module.css';
import Word from '../../components/Word/Word';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useState } from 'react';


export default function Game({ words }) {
    const [count, setCount] = useState(0);
    const [studiedWords, setStudiedWords] = useState(0);
    const [studiedWordsId, setStudiedWordsId] = useState([]);

    function nextSlide() {
        if (count === words.length - 1) {
            setCount(0);
            return
        }
        setCount(count + 1)
    }

    function prevSlide() {
        if (count === 0) {
            setCount(words.length - 1);
            return
        }
        setCount(count - 1)
    }


    const handleClick = (id) => {

        if (!studiedWordsId.includes(id)) {
            setStudiedWords(studiedWords + 1);
            setStudiedWordsId([...studiedWordsId, id]);
        }
        return studiedWordsId
    }


    return (
        <>
            <div className={styles.game}>
                <BsArrowLeftCircle className={styles.slider} onClick={prevSlide} />
                <div>
                    <Word word={words[count]} key={words[count].id} handleClick={handleClick} />
                    <p className={styles.count}>Слово {count + 1} из {words.length}</p>
                    <p className={styles.studied}>Выучено слов {studiedWords}</p>
                </div>

                <BsArrowRightCircle className={styles.slider} onClick={nextSlide} />
            </div >
        </>
    )
}