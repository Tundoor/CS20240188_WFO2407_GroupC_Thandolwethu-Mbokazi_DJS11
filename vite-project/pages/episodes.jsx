import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';


function Episodes() {
    const [episode, setEpisode] = useState([]);
    const [show, setShow] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null);
    const { id, seasonId } = useParams();
    const abortControllerRef = useRef(null)
    const [openAudio, setAudio] = useState(false)


    abortControllerRef.current = new AbortController
    console.log(typeof seasonId)

    // Fetch data from the API
    useEffect(() => {

        if (!abortControllerRef.current) {
            abortControllerRef.current = new AbortController();
            console.log("Initialized new AbortController: ", abortControllerRef.current);
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`https://podcast-api.netlify.app/id/${id}`, {
                    signal: abortControllerRef.current.signal // Correct placement of signal in fetch options
                });

                const data = await res.json();
                console.log(data);
                setData(data);

                // Ensure the ID matches the URL parameter
                if (data && data.id === id) {
                    setShow(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                if (error.name === "AbortError") {
                    console.log("Aborted");
                    return;
                }
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const loadSeasonData = async () => {
            if (show && seasonId) {
                const season = show.seasons.find(
                    (season) => season.season === Number(seasonId)
                );

                console.log('Season found:', season);

                if (season) {
                    setEpisode(season.episodes);
                } else {
                    setEpisode([]);
                }
            }
        };

        loadSeasonData();
    }, [show, seasonId]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (!show) {
        return <p>No podcast data available</p>;
    }

    return (
        <div>
            <div className="showPodcastDiv">
                <div className="podTitleDiv">
                    <h1 className="podcastTitle">Episodes for {show.title}</h1>
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

            <div className='epCard'>
                {episode.map((ep, index) => (
                    <>

                        <div className="ep-card" key={ep.id}>
                            <img className="card-image" src={data.image}></img>
                            <div className="ep-info">
                                <h1 className="card-title">{ep.title}</h1>
                                <h6 className="card-episodes">Ep {index + 1}</h6>
                                <button className='favBtn'>Favourite</button>
                                <button className='favBtn'>Unfavourite</button>
                                <button className='favBtn' onClick={() => (setAudio)}>Listen</button>
                                <h2 className="desc-title">Description</h2>
                                <p className="card-desc">{ep.description}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Episodes;




