import { MovieData } from '../types'
import NominatedItem from './NominatedItem/NominatedItem'
import styles from './NominatedList.module.css'

type NominatedListProps = {
    list: MovieData[],
    onRemove: (movie: MovieData) => void,
    className?: string
}
export default function NominatedList({ list, onRemove, className }: NominatedListProps) {
    return (
        <div className={`${className} ${styles.container}`}>
            <h5>Nominated:</h5>
            <ul className={styles.list}>
                {list.map(e => (
                    <li key={e.imdbID}>
                        <NominatedItem movie={e} onRemove={onRemove}/>
                    </li>
                ))}
            </ul>
        </div>
        
    )
}