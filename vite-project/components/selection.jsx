import genre from "../genre"

export function Selection({ onGenreChange }) {

    const handleGenreChange = (event) => {
        const genreValue = event.target.value;
        onGenreChange(genreValue); // Call the passed down callback function
    };
    return (
        <select name="All Genres" className="genre-dropDown" onChange={handleGenreChange}>
            <option value="allGenres">All Genres</option>
            {Object.entries(genre).map(([key, value]) => (
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
        </select>
    );
}
