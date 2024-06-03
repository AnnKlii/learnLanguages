import { BsFillPencilFill, BsFillTrash3Fill, BsCheckLg } from "react-icons/bs";
import styles from './Buttons.module.css';

export default function Buttons() {
    return (
        <div className={styles.actions}>
            <span className={styles.safeBtn}><BsCheckLg /> Save</span>
            <BsFillPencilFill className={styles.editBtn} />
            <BsFillTrash3Fill className={styles.deleteBtn} /></div>
    )
}