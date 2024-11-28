import { Link } from "react-router-dom"

function PodcastLanding() {
    return (
        <>
            <div className="podLandingPage">
                {/* Podcast Display header section */}
                <div className="mainPodcastHeader">
                    <div className="podcastHeaderTitleSect">
                        <div className="podTitleDiv">
                            <h1 className="podcastTitle">The Alien Adventures of Finn Caspian: Science Fiction for Kids</h1>
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
                            <p>The Alien Adventures of Finn Caspian is a serialized science-fiction story for kids (start with Episode 1), told in 15-20 minute episodes for parents to put on when driving around town, or to marathon on road trips, or to bond over before bed. The story centers on Finn Caspian, an 8-year-old boy aboard The Famous Marlowe 280 Interplanetary Exploratory Space Station. He and his friends Abigail, Elias and Vale are Explorers Troop 301, taking off from the Marlowe to explore uncharted planets, help the occasional alien, and solve a mystery that threatens to destroy the Marlowe. When pressed, we describe it as a \"mystery gang\" story, sort of like Scooby-Doo in space. The story is written and performed by Jonathan Messinger, author of Hiding Out, former web editor of Time Out Chicago Kids, and father of two boys. His son Griffin, 7, serves as editor of the story, appearing in episodes to critique, make predictions and express skepticism that his father knows what he's talking about, which also happens to be the way the rest of their relationship works. Produced in partnership with Gen-Z Media. For more great Gen-Z podcasts visit: http://gzmshows.com"</p>
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
                    <div className="seasons">
                        <img className="season-image" src="https://content.production.cdn.art19.com/images/d3/74/3c/3f/d3743c3f-df43-43a6-8c6b-6e36c486b9af/3df851f9903d4112dfab28871c9c5cc6a1f90f7a4f36f2d14c5c3c173521ca30433661809dee3df677d160d5cb3dce7f1ea6391856253dcc36e9877fc546f657.jpeg"></img>
                        <h2 className="seasonNumber">Season: </h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PodcastLanding