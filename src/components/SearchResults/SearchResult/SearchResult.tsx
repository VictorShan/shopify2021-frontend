import { MovieData } from '../SearchResults'
import styles from './SearchResult.module.css'
import Button from 'react-bootstrap/Button'
export type SearchResultProps = {
    movieData: MovieData
}

export default function SearchResult({ movieData }: SearchResultProps) {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={movieData.Poster} alt={`${movieData.Title}`} />
            <div className={styles.text}>
                <h4 className={styles.movieTitle}>{movieData.Title}</h4>
                <p className={styles.movieYear}>{movieData.Year}</p>
                <Button variant={"outline-primary"} className={styles.btn}>Nominate</Button>
            </div>
        </div>
    )
}