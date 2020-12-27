import { MovieData } from '../../types'
import styles from './SearchResult.module.css'
import Button from 'react-bootstrap/Button'
export type SearchResultProps = {
    movieData: MovieData,
    onNominate: () => void,
    nominated?: boolean
}

export default function SearchResult({ movieData, onNominate, nominated }: SearchResultProps) {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={movieData.Poster} alt={`${movieData.Title}`} />
            <div className={styles.text}>
                <h4 className={styles.movieTitle}>{movieData.Title}</h4>
                <p className={styles.movieYear}>{movieData.Year}</p>
                <Button variant={"outline-dark"} className={styles.btn} onClick={onNominate} disabled={!!nominated}>Nominate</Button>
            </div>
        </div>
    )
}