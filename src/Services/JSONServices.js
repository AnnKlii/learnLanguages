export default class wordsJSON {
    static async getWords() {
        try {
            const responce = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            const words = await responce.json();
            return words;
        } catch (e) {
            console.log(e)
        }
    }
    static async addWords(words) {
        try {
            await fetch('http://itgirlschool.justmakeit.ru/api/words', {
                method: "POST",
                haeders: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(words),
            });
        } catch (e) {
            console.log(e)
        }
    }
}








