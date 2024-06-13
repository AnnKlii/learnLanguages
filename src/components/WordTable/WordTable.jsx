import styles from './WordTable.module.css'
import items from '../../../words.json';
import { useState } from 'react';
import { BsFillPencilFill, BsFillTrash3Fill, BsCheckLg } from "react-icons/bs";


export default function WordTable() {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedItems, setEditedItems] = useState(items);

    const handleEdit = (index) => {
        setEditingIndex(index);
    };

    const handleSave = () => {
        setEditingIndex(null);
    };

    const handleChange = (index, key, value) => {
        const newItems = [...editedItems];
        newItems[index][key] = value;
        setEditedItems(newItems);
    };

    const handleDelete = (index) => {
        const newItems = [...editedItems];
        newItems.splice(index, 1);
        setEditedItems(newItems);
    }

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
                <tbody className={styles.tbody}>
                    {
                        editedItems.map((item, index) => {
                            return editingIndex === index ? (
                                <tr className={styles.editRow} key={index}>
                                    <td>
                                        <input value={item.english} onChange={(e) => handleChange(index, "english", e.target.value)} />
                                    </td>
                                    <td>
                                        <input value={item.transcription} onChange={(e) => handleChange(index, "transcription", e.target.value)} />
                                    </td>
                                    <td>
                                        <input value={item.russian} onChange={(e) => handleChange(index, "russian", e.target.value)} />
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <span className={styles.safeBtn} onClick={() => handleSave(index)}>
                                                Save <BsCheckLg />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                <tr key={index}>
                                    <td>{item.english}</td>
                                    <td>{item.transcription}</td>
                                    <td>{item.russian}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <BsFillPencilFill onClick={() => handleEdit(index)} className={styles.editBtn} />
                                            <BsFillTrash3Fill onClick={() => handleDelete(index)} className={styles.deleteBtn} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    )
}