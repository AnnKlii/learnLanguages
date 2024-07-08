import { createContext, useState, useEffect } from "react";
import wordsJSON from "../Services/JSONServices";
export const MyContext = createContext();

export function MyProvider({ children }) {
    const [words, setWords] = useState(false);
    const [updateServ, setUpdateServ] = useState(false);

    useEffect(() => {
        getWordsServ()
    }, []);

    async function getWordsServ() {
        const words = await wordsJSON.getWords();
        setWords(words);
    }

    const stateContext = { words, setWords, updateServ, setUpdateServ }

    if (!words) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    return <MyContext.Provider value={stateContext}>{children}</MyContext.Provider>
}