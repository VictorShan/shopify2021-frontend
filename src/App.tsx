import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import { useState } from 'react';
import { MovieData } from './components/types';
import NominatedList from './components/NominatedList/NominatedList';
import { Alert } from 'react-bootstrap';

function App() {
  let [searchTerm, setSearchTerm] = useState("")
  let [nominated, setNominated] = useState<MovieData[]>([])
  return (
    <div className={styles.app}>
      {
        nominated.length >= 5 ?
          <div className={styles.alert}>
            <Alert variant={'success'}>
              You have 5 nominations!
            </Alert>
          </div>
           : <></>
      }
      <div>
        <h1>The Shoppies</h1>
        <SearchBar onChange={setSearchTerm}/>
      </div>
      <div className={styles.container}>
        <SearchResults
          className={styles.left}
          searchTerm={searchTerm}
          nominated={nominated}
          onNominate={newMovie => setNominated(old => [...old, newMovie])}/>
        <NominatedList
          className={styles.right}
          list={nominated} 
          onRemove={movie => setNominated(old => old.filter(e => e.imdbID !== movie.imdbID))}/>
      </div>
    </div>
  );
}

export default App;
