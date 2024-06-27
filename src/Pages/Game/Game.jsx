import styles from './Game.module.css';
import Word from '../../Components/Word/Word';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useState } from 'react';


export default function Game({ words }) {
    const [count, setCount] = useState(0);

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

    return (
        <>
            <div className={styles.game}>
                <BsArrowLeftCircle className={styles.slider} onClick={prevSlide} />
                <div>
                    <Word {...words[count]} key={words[count].id} />
                    <p className={styles.count}>Слово {count + 1} из {words.length}</p>
                </div>

                <BsArrowRightCircle className={styles.slider} onClick={nextSlide} />
            </div >
        </>
    )
}