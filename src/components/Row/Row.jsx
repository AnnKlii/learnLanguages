import { BsFillPencilFill, BsFillTrash3Fill, BsCheckLg, BsFillXCircleFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import styles from './Row.module.css';


export default function Row({ word, handleSave, handleDelete }) {
    const { id, english, transcription, russian } = word;

    const [edit, setEdit] = useState(false);
    const [currentEdit, setCurrentEdit] = useState('');

    const [englishDirty, setEnglishDirty] = useState(false);
    const [transcriptionDirty, setTranscriptionDirty] = useState(false);
    const [russianDirty, setRussianDirty] = useState(false);

    const [formValid, setFormValid] = useState(true);
    const [error, setError] = useState(false)


    useEffect(() => {
        setCurrentEdit({ id, english, transcription, russian });
    }, [word])

    useEffect(() => {
        if ((Object.values(currentEdit).some((item) => item === '')) || error)
            return setFormValid(false)
        setFormValid(true)
    }, [currentEdit, error])

    useEffect(() => {
        const englishRe = /^[a-zA-Z]*$/gi;
        const russianRe = /^[а-яА-ЯЁё]*$/gi;

        if (!englishRe.test(currentEdit.english)) {
            return setError({ english: 'Используйте только английские буквы' });
        }
        else if (!russianRe.test(currentEdit.russian)) {
            setError({ russian: 'Используйте только русские буквы' })
        }
        else setError(false)
    }, [currentEdit])

    const handleChange = (key, value) => {
        setCurrentEdit({ ...currentEdit, [key]: value });
    }

    const handleCancel = () => {
        setEdit(false);
        setCurrentEdit(currentEdit);
    };

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

        edit
            ? (<tr>
                <td>
                    {(englishDirty && error.english) && (<div style={{ color: 'red' }}>{error.english}</div>)}
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
                    {(russianDirty && error.russian) && (<div style={{ color: 'red' }}>{error.russian}</div>)}
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
                            onClick={() => {
                                handleSave(currentEdit.id, currentEdit.english, currentEdit.transcription, currentEdit.russian);
                                setEdit(false)
                            }}
                            disabled={!formValid}
                            type="submit">
                            Save <BsCheckLg />
                        </button>
                        <BsFillXCircleFill
                            className={styles.cancelBtn}
                            onClick={handleCancel} />
                    </div>
                </td>
            </tr>)
            : (<tr  >
                <td>{english}</td>
                <td>{transcription}</td>
                <td>{russian}</td>
                <td>
                    <div className={styles.actions}>
                        <BsFillPencilFill onClick={() => setEdit(true)} className={styles.editBtn} />
                        <BsFillTrash3Fill onClick={() => handleDelete(currentEdit.id)} className={styles.deleteBtn} />
                    </div>
                </td>
            </tr>
            )

    )

}
