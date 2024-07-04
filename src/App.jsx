import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Error, Game, WordTable, Home } from './Pages';
import wordsJSon from './data/words.json';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';

function App() {
  const [words, setWords] = useState(wordsJSon);

  if (!words) return <h1>Loading...</h1>

  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game setWords={setWords} words={words} />} />
        <Route path='/table' element={<WordTable setWords={setWords} words={words} />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
