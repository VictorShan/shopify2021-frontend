import { useEffect, useState } from "react"
import SearchResult from "./SearchResult/SearchResult"
import styles from './SearchResults.module.css'

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
    let [results, setResults] = useState<MovieData[]>([])
    let [nominated, setNominated] = useState<MovieData[]>([])
    useEffect(() => {
        fetch(process.env.REACT_APP_OMDB_API_SEARCH + searchTerm.replaceAll(' ', '+'))
            .then(res => res.json())
            .then(res => setResults(res.Search))
            .catch(console.error)
    }, [searchTerm])

    const handleNominated = (movieData: MovieData, nominated: MovieData[]) => {
        if (nominated.filter(movie => movie.imdbID === movieData.imdbID).length === 1) {
            console.log(movieData.Title)
            return () => {}
        } else {
            return () => setNominated(old => [...old, movieData])
        }
    }
    return (
        <div className={styles.resultsContainer}>
            {console.log(results)}
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
                                onNominate={() => setNominated(old => [...old, e])} />
                        )
                    }
                    return <li key={e?.Title}>{searchRes}</li>
                })
                }
            </ul>
        </div>
    )
}