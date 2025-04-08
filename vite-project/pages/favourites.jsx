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

            <Link to="/">
                <div className="home navBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 24 24">
                        <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
                    </svg>
                </div></Link>

            <div className="main-div">
                <h1 className="main-header">Your Favourites</h1>

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