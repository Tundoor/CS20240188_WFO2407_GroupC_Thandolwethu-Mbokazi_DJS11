function Favourites() {
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

                    <div className="card" >
                        <img className="card-image" src=""></img>
                        <div className="card-info">
                            <h1 className="card-title">Placeholder</h1>
                            <h6 className="card-seasons">Seasons: </h6>
                            <h6 className="card-episodes">Episodes: </h6>
                            <h6 className="card-episodes">Updated On: </h6>
                            <h2 className="desc-title">Description</h2>
                            <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum impedit laudantium dolores aliquid similique obcaecati illo, et nisi qui? Quia cumque blanditiis doloremque iure quis consequatur ratione, quasi dolorem?</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Favourites