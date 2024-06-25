import styles from './WordTable.module.css'
import { useEffect, useState } from 'react';
import { BsFillPencilFill, BsFillTrash3Fill, BsCheckLg, BsFillXCircleFill } from "react-icons/bs";

export default function WordTable({ words }) {
    const { english, transcription, russian } = words;

    const [editingIndex, setEditingIndex] = useState(null);
    const [editedItems, setEditedItems] = useState(words);
    const [currentEdit, setCurrentEdit] = useState('');


    useEffect(() => {
        setCurrentEdit({ english, transcription, russian })
    }, [words])

    const handleEdit = (index) => {
        setEditingIndex(index);
        setCurrentEdit(editedItems[index]);
    };

    const handleSave = () => {
        const newItems = [...editedItems];
        newItems[editingIndex] = currentEdit;
        setEditedItems(newItems);
        setEditingIndex(null);
    };

    const handleChange = (key, value) => {
        setCurrentEdit({ ...currentEdit, [key]: value });
    };

    const handleCancel = () => {
        setEditingIndex(null);
    };


    const handleDelete = (index) => {
        const newItems = [...editedItems];
        newItems.splice(index, 1);
        setEditedItems(newItems);
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
                    <tbody className={styles.tbody}>
                        {editedItems.map((item, index) => {
                            return editingIndex === index
                                ? (<tr className={styles.editRow} key={index} >
                                    <td>
                                        <input
                                            type='text'
                                            value={currentEdit.english}
                                            onChange={(e) => handleChange("english", e.target.value)} />
                                    </td>
                                    <td>
                                        <input
                                            type='text'
                                            value={currentEdit.transcription}
                                            onChange={(e) => handleChange("transcription", e.target.value)} />
                                    </td>
                                    <td>
                                        <input
                                            type='text'
                                            value={currentEdit.russian}
                                            onChange={(e) => handleChange("russian", e.target.value)} />
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <span
                                                className={styles.safeBtn}
                                                onClick={() => handleSave(index)}>
                                                Save <BsCheckLg />
                                            </span>
                                            <BsFillXCircleFill
                                                className={styles.cancelBtn}
                                                onClick={() => handleCancel(index)} />
                                        </div>
                                    </td>
                                </tr>)
                                : (<tr key={index}>
                                    <td>{item.english}</td>
                                    <td>{item.transcription}</td>
                                    <td>{item.russian}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <BsFillPencilFill onClick={() => handleEdit(index)} className={styles.editBtn} />
                                            <BsFillTrash3Fill onClick={handleDelete} className={styles.deleteBtn} />
                                        </div>
                                    </td>
                                </tr>)
                        })}

                    </tbody>
                </table>
            </div>
        </>
    )
}

