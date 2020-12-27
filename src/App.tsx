import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import { useState } from 'react';

function App() {
  let [searchTerm, setSearchTerm] = useState("")
  return (
    <div className={styles.app}>
      <div>
        <h1>The Shoppies</h1>
        <SearchBar onChange={setSearchTerm}/>
      </div>
      <div>
        <SearchResults searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
