import Row from '../../components/Row/Row'
import styles from './WordTable.module.css'


export default function WordTable({ words }) {

    return (
        <>
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
                    <Row words={words} />
                </table>
            </div>
        </>
    )
}

