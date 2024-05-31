import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Word from './components/Word/Word';
import WordTable from './components/WordTable/WordTable';
import Main from './components/Main/Main';



function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Word />
      <WordTable />
      <Footer />
    </div>)
}

export default App
