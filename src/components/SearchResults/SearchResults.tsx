import { useEffect, useState } from "react"
import SearchResult from "./SearchResult/SearchResult"
import styles from './SearchResults.module.css'
require('dotenv').config()

export type searchResultProps = {
    searchTerm: string
}

export type MovieData = {
    Title: string,
    Poster: string,
    Type: string,
    imdbID: string,
    Year: number
}

export default function SearchResults({ searchTerm }: searchResultProps) {
    let [results, setResults] = useState<MovieData[]>()
    useEffect(() => {
        fetch(process.env.REACT_APP_OMDB_API_SEARCH + searchTerm.replaceAll(' ', '+'))
            .then(res => res.json())
            .then(res => setResults(res.Search))
            .catch(console.error)
    }, [searchTerm])
    return (
        <div className={styles.resultsContainer}>
            {console.log(results)}
            <ul className={styles.list}>
                {results && results.map(e => (
                    <li key={e?.Title}>
                        <SearchResult movieData={e} />
                    </li>
                ))}
            </ul>
        </div>
    )
}