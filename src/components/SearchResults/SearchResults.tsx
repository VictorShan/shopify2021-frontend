import { useEffect, useState } from "react"
import SearchResult from "./SearchResult/SearchResult"
import { MovieData } from "../types"
import styles from './SearchResults.module.css'

export type searchResultProps = {
    searchTerm: string,
    nominated: MovieData[],
    onNominate: (movie: MovieData) => void,
    className?: string
}

export default function SearchResults({ searchTerm, nominated, onNominate, className }: searchResultProps) {
    let [results, setResults] = useState<MovieData[]>([])
    useEffect(() => {
        fetch(process.env.REACT_APP_OMDB_API_SEARCH + searchTerm.replaceAll(' ', '+'))
            .then(res => res.json())
            .then(res => setResults(res.Search))
            .catch(console.error)
    }, [searchTerm])

    return (
        
        <div className={`${styles.resultsContainer} ${className}`}>
            <h5>Search Results:</h5>
            <ul className={styles.list}>
                {results && results.map(e => {
                    let searchRes
                    if (nominated.filter(movie => movie.imdbID === e.imdbID).length === 1) {
                        searchRes = (
                            <SearchResult
                                movieData={e}
                                onNominate={() => {}} nominated/>
                        )
                    } else {
                        searchRes = (
                            <SearchResult
                                movieData={e}
                                onNominate={() => onNominate(e)} />
                        )
                    }
                    return (
                        <li key={e?.Title}>
                            {searchRes}
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}