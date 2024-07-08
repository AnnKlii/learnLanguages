import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Error, Game, WordTable, Home } from './Pages';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';


function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/table' element={<WordTable />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
