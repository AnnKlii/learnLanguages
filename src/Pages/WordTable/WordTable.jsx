import { useContext } from 'react';
import { MyContext } from '../../Context/MyContext';
import Row from '../../components/Row/Row';
import styles from './WordTable.module.css';
import wordsJSON from '../../Services/JSONServices';


export default function WordTable() {

    const { words, setWords, updateServ, setUpdateServ } = useContext(MyContext);

    async function handleSave(id, english, transcription, russian) {
        const newWords = words.map((item, index) => {
            if (item.id === id) {
                item.english = english;
                item.transcription = transcription;
                item.russian = russian;
                return item;
            } return item;
        })
        setWords(newWords);

        const obj = {
            english,
            transcription,
            russian,
            tags: "",
            tags_json: ""
        }
        await wordsJSON.addWords(obj);
        setUpdateServ(!updateServ);

    }

    function handleDelete(id) {
        const newWords = words.filter((item) => item.id !== id);
        setWords(newWords);
        wordsJSON.addWords(newWords);

    }

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
                    <tbody>
                        {words.map((item, index) => {
                            return <Row key={index} word={item} handleSave={handleSave} handleDelete={handleDelete} />
                        })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

