import { MovieData } from '../types'
import NominatedItem from './NominatedItem/NominatedItem'
import styles from './NominatedList.module.css'

type NominatedListProps = {
    list: MovieData[],
    onRemove: (movie: MovieData) => void
}
export default function NominatedList({ list, onRemove }: NominatedListProps) {
    return (
        <ul className={styles.list}>
            {list.map(e => (
                <li key={e.imdbID}>
                    <NominatedItem movie={e} onRemove={onRemove}/>
                </li>
            ))}
        </ul>
    )
}