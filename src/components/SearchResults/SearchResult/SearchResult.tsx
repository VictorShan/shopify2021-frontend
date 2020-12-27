import { MovieData } from '../SearchResults'
export type SearchResultProps = {
    movieData: MovieData
}

export default function SearchResult({ movieData }: SearchResultProps) {
    return (
        <div>
            <img src={movieData.Poster} alt={`${movieData.Title}`} />
            <div>
                <h4>{movieData.Title}</h4>
                <p>{movieData.Year}</p>
            </div>
        </div>
    )
}