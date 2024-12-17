function Favourites() {

    let favourites = JSON.parse(localStorage.getItem("Favourites") || "[]")
    console.log(favourites)

    return (
        <div className="home-div">
            <div className="logo-div">
                <h1 className="logo">PodSphere</h1>
                <p>Where Every Story Finds A Listener</p>
            </div>
            <div className="main-div">
                <h1 className="main-header">Your Favourites</h1>
                {/* Attempt to make this dynamic */}

                <div className="main-cards">
                    {/*  Renders our shows on the browser */}

                    {favourites.map((ep) => (
                        <div className="card" >
                            <img className="card-image" src={ep.image}></img>
                            <div className="card-info">
                                <h1 className="card-title">{ep.title}</h1>
                                <h6 className="card-seasons">Season: {ep.Season} </h6>
                                <h6 className="card-episodes">Episode: {ep.episodeID} </h6>
                                <h6 className="card-episodes">Added to Favourite On: {ep.lastUpdated}</h6>
                                <h2 className="desc-title">Description</h2>
                                <p className="card-desc">{ep.desc}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Favourites