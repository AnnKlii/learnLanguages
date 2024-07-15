export default class wordsJSON {
    static async getWords() {
        try {
            const resp = await fetch("/api/words");
            const words = await resp.json();
            return words;
        } catch (e) {
            console.log(e)
        }
    }
    static async addWords(words) {
        try {
            await fetch("/api/words/add", {
                method: "POST",
                haeders: { "Content-Type": "application/json" },
                body: JSON.stringify(words),
            });
        } catch (e) {
            console.log(e)
        }
    }

    static async changeData(words) {
        let id = words.id;

        try {
            await fetch(`/api/words/${id}/update`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(words)
            });
        }
        catch (e) {
            console.log(e);
        }
    }

    static async deleteWord(words) {
        let id = words.id;

        try {
            await fetch(`/api/words/${id}/delete`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    static async getCard(itemIndex) {
        let i = itemIndex.itemIndex;
        console.log(i);


        try {
            const resp = await fetch(`/api/words/${i}`);
            const words = await resp.json();
            return words;
        }
        catch (e) {
            console.log(e);
        }
    }
}








