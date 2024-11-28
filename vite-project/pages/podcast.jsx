import React from "react"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function PodcastLanding() {
    const [show, setShow] = useState(null)
    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetch(`https://podcast-api.netlify.app/id/${params.id}`)
            .then((res) => res.json())
            .then((data) => setShow(data))
            .catch((error) => console.log)
    }, [params.id])


    return (
        !show ? ( // Conditional rendering using a ternary operator
            <div>Loading...</div>
        ) : (
            <div className="podLandingPage">
                {/* Podcast Display header section */}
                <div className="mainPodcastHeader">
                    <div className="podcastHeaderTitleSect">
                        <div className="podTitleDiv">
                            <h1 className="podcastTitle">{show.title}</h1>
                        </div>
                        {/* Links Back to home page */}
                        <Link to="/">
                            <div className="podHome">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 24 24">
                                    <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className="podLandingDescription">
                        <h1 className="podLandingDescTitle">Description</h1>
                        <div className="descriptionParagrapgh">
                            <p>{show.description}</p>
                        </div>
                        <h2 className="podcastGenre">Genre</h2>
                    </div>
                    <div className="podcastInfo">
                        <h2></h2>
                        <h2></h2>
                    </div>
                </div>

                {/* Podcast Display Body Section */}

                <div className="mainPodcastBody">
                    <h1 className="season">Season:</h1>
                    <div className="seasonsDiv">
                        {show.seasons.map((season) => (

                            <div className="seasons">
                                <img className="season-image" src={season.image}></img>
                                <div className="seasonsInfo">
                                    <h2 className="seasonNumber">{season.title}</h2>
                                    <div className="seasonEpDiv">
                                        <h3 className="seasonEps">Eps: {season.episodes.length} </h3>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>


                </div>
            </div>)

    )
}

export default PodcastLanding