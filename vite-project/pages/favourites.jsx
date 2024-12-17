import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Favourites() {
    // Initialize state with favourites from localStorage
    const [favourites, setFavourites] = useState(() => {
        return JSON.parse(localStorage.getItem("Favourites") || "[]");
    });

    const removeFav = (index) => {
        // Filter out the episode by its index in the array
        const updatedFavourites = favourites.filter((_, i) => i !== index);

        // Update localStorage and state
        localStorage.setItem("Favourites", JSON.stringify(updatedFavourites));
        setFavourites(updatedFavourites);  // Update the state to trigger re-render
    };

    return (
        <div className="home-div">
            <div className="logo-div">
                <h1 className="logo">PodSphere</h1>
                <p>Where Every Story Finds A Listener</p>
            </div>
            <div className="main-div">
                <h1 className="main-header">Your Favourites</h1>
                <Link to="/home"><h2>&larr; Back to home</h2></Link>

                <div className="main-cards">
                    {/*  Renders our shows on the browser */}
                    {favourites.length > 0 ? (
                        favourites.map((ep, index) => (
                            <div className="card" key={index}>
                                <img className="card-image" src={ep.image} alt={ep.title} />
                                <div className="card-info">
                                    <h1 className="card-title">{ep.title}</h1>
                                    <h6 className="card-seasons">Season: {ep.Season}</h6>
                                    <h6 className="card-episodes">Episode: {ep.episodeID}</h6>
                                    <h6 className="card-episodes">
                                        Updated On: {ep.lastUpdated || "Unknown"}
                                    </h6>
                                    <button className="favBtn" onClick={() => removeFav(index)}>Unfavourite</button>
                                    <h2 className="desc-title">Description</h2>
                                    <p className="card-desc">{ep.desc || "No description available."}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>You have no Favourited Items</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Favourites;