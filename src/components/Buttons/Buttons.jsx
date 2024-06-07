import { BsFillPencilFill, BsFillTrash3Fill, BsCheckLg } from "react-icons/bs";
import styles from './Buttons.module.css';
import { useState } from "react";

export default function Buttons() {
    const [pressed, setPressed] = useState(false)

    return (
        <div className={styles.actions}>
            <span className={pressed ? `${styles.safeBtn}` : `${styles.safeBtn_hidden}`} >
                Save <BsCheckLg />
            </span>
            <BsFillPencilFill onClick={() => { setPressed(true) }} className={styles.editBtn} />
            <BsFillTrash3Fill className={styles.deleteBtn} />
        </div >
    )
}