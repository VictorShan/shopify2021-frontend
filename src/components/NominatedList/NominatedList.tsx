import { MovieData } from '../types'
import NominatedItem from './NominatedItem/NominatedItem'

type NominatedListProps = {
    list: MovieData[],
    onRemove: (movie: MovieData) => void
}
export default function NominatedList({ list, onRemove }: NominatedListProps) {
    return (
        <ul>
            {list.map(e => (
                <li key={e.imdbID}>
                    <NominatedItem movie={e} onRemove={onRemove}/>
                </li>
            ))}
        </ul>
    )
}