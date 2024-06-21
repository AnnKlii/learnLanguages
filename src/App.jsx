import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import WordTable from './components/WordTable/WordTable';
import Main from './components/Main/Main';
import wordsJSon from '../words.json';
import { useState } from 'react';

function App() {
  const [words, setWords] = useState(wordsJSon);
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Game setWords={setWords} words={words} />
      <WordTable setWords={setWords} words={words} />
      <Footer />
    </div>)
}

export default App
