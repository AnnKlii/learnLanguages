import styles from './WordTable.module.css'
import items from '../../../words.json';
import TableRow from '../TableRow/TableRow';
import EditRow from '../EditRow/EditRow';
import { useState } from 'react';

export default function WordTable() {
    const [pressed, setPressed] = useState(false)

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Word</th>
                        <th>Transcription</th>
                        <th>Translation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>{

                    items.map((item, index) => {
                        return (
                            pressed
                                ? <EditRow key={item.id} word={item.english} transcription={item.transcription} translation={item.russian} tags={item.tags} />
                                : <TableRow key={item.id} word={item.english} transcription={item.transcription} translation={item.russian} tags={item.tags} />
                        )
                    })

                }
                </tbody>
            </table>
        </div>
    )
}