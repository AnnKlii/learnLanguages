import Buttons from '../Buttons/Buttons';
import styles from './EditRow.module.css';
import s from '../Buttons/Buttons.module.css'

export default function EditRow(props) {
    return (
        <tr className={styles.editRow}>
            <td><input placeholder={props.word}></input></td>
            <td><input placeholder={props.transcription}></input></td>
            <td><input placeholder={props.translation}></input></td>
            <td>
                {/* <span ><BsCheckLg /> Save</span> */}
                <Buttons />
            </td>
        </tr>
    )
}