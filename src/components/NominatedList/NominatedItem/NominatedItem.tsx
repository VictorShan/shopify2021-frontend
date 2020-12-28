import { MovieData } from '../../types'
import Button from 'react-bootstrap/Button'
import styles from './NominatedItem.module.css'

type props = {
    movie: MovieData,
    onRemove: (movie: MovieData) => void
}

export default function NominatedItem({ movie, onRemove }: props) {
    return (
        <div className={styles.card}>
            {
                movie.Poster === "N/A" ?
                <div className={styles.svg}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="32px"
                    fill="currentColor"
                    className={`bi bi-file-image`}
                    viewBox="0 0 16 16">
                    <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
                </svg>
                </div>
                :
                <img src={movie.Poster} alt={movie.Title} className={styles.icon}/>
            }
            
            <h5 className={styles.title}>{movie.Title}</h5>
            <Button
                variant={"outline-danger"}
                onClick={ () => { onRemove(movie) }}
                className={styles.btn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </Button>
        </div>
    )
}