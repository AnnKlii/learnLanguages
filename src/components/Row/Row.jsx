import { BsFillPencilFill, BsFillTrash3Fill, BsCheckLg, BsFillXCircleFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import styles from './Row.module.css';


export default function Row({ words }) {

    const [editingIndex, setEditingIndex] = useState(null);
    const [editedItems, setEditedItems] = useState(words);
    const [currentEdit, setCurrentEdit] = useState(words);

    const [error, setError] = useState({ english: 'ffff', transcription: 'ffff', russian: 'ffff' })
    // const [error, setError] = useState({ english: 'Поле не может быть пустым', transcription: 'Поле не может быть пустым', russian: 'Поле не может быть пустым' });

    const [englishDirty, setEnglishDirty] = useState(false);
    const [transcriptionDirty, setTranscriptionDirty] = useState(false);
    const [russianDirty, setRussianDirty] = useState(false);

    const [formValid, setFormValid] = useState(true);

    useEffect(() => {
        if (Object.values(currentEdit).some((item) => item === ''))
            return setFormValid(false)
        setFormValid(true)

    }, [currentEdit])


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

        // const englishRe = /^[a-zA-Z]*$/gi;
        // const russianRe = /^[а-яА-ЯЁё]$/gi;

        // if (currentEdit.english.match(englishRe))
        //     console.log('верно')

    };

    const handleCancel = () => {
        setEditingIndex(null);
    };

    const handleDelete = (index) => {
        const newItems = [...editedItems];
        newItems.splice(index, 1);
        setEditedItems(newItems);
    }

    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'english':
                setEnglishDirty(true)
                break
            case 'transcription':
                setTranscriptionDirty(true)
                break
            case 'russian':
                setRussianDirty(true)
                break
        }
    }

    return (
        <tbody className={styles.tbody}>
            {editedItems.map((item, index) => {
                return editingIndex === index
                    ? (<tr className={styles.editRow} key={index} >
                        <td>
                            {/* {(englishDirty && currentEdit.english === '') && (<div style={{ color: 'red' }}></div>)} */}
                            <input style=
                                {(englishDirty && currentEdit.english === '') ? { borderColor: 'red' } : { border: 'default' }}
                                type='text'
                                name='english'
                                value={currentEdit.english}
                                onChange={(e) => handleChange("english", e.target.value)}
                                onBlur={(e) => handleBlur(e)} />
                        </td>
                        <td>
                            {/* {(transcriptionDirty && currentEdit.transcription === '') && (<div style={{ borderColor: 'red' }}>{error.transcription}</div>)} */}
                            <input style=
                                {(transcriptionDirty && currentEdit.transcription === '') ? { borderColor: 'red' } : { border: 'default' }}
                                type='text'
                                name='transcription'
                                value={currentEdit.transcription}
                                onChange={(e) => handleChange("transcription", e.target.value)}
                                onBlur={(e) => handleBlur(e)} />
                        </td>
                        <td>
                            {/* {(russianDirty && currentEdit.russian === '') && (<div style={{ color: 'red' }}>{error.russian}</div>)} */}
                            <input style=
                                {(russianDirty && currentEdit.russian === '') ? { borderColor: 'red' } : { border: 'default' }}
                                type='text'
                                name='russian'
                                value={currentEdit.russian}
                                onChange={(e) => handleChange("russian", e.target.value)}
                                onBlur={(e) => handleBlur(e)} />
                        </td>
                        <td>
                            <div className={styles.actions}>
                                <button className={styles.safeBtn}
                                    onClick={() => handleSave(index)}
                                    disabled={!formValid}
                                    type="submit">
                                    Save <BsCheckLg />
                                </button>
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

        </tbody >
    )
}
