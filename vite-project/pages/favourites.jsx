import { Link } from "react-router-dom"

function Favourites() {

    let favourites = JSON.parse(localStorage.getItem("Favourites") || "[]")
    console.log(favourites)

    const removeFav = (index, id) => {
        const itemIndex = favourites.findIndex(fav => fav.episodeID === index && fav.id === id);

        if (itemIndex !== -1) {
            favourites.splice(itemIndex, 1);

            localStorage.setItem("Favourites", JSON.stringify(favourites));
        }
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

                    {favourites && favourites.length > 0 ? (
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
                                    <button className='favBtn' onClick={() => { removeFav(index, ep.id) }}>Unfavourite</button>
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
    )
}

export default Favourites