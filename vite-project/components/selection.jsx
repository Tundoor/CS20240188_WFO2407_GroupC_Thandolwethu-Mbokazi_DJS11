import genre from "../genre"

export function Selection() {
    return (
        <select name="All Genres" className="genre-dropDown">
            <option value="allGenres">All Genres</option>
            {Object.entries(genre).map(([key, value]) => (
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
        </select>
    );
}
