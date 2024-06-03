import Buttons from "../Buttons/Buttons";
import styles from './TableRow.module.css';

export default function TableRow(props) {

    return (
        <tr className={styles.tableRow}>
            <td>{props.word}</td>
            <td>{props.transcription}</td>
            <td>{props.translation}</td>
            <td>
                <Buttons />
            </td>
        </tr>
    )
}