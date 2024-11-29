import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

function Episodes() {
    const [episode, setEpisode] = useState([]);
    const [show, setShow] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null);
    const { id, seasonTitle } = useParams();
    const abortControllerRef = useRef(null)


    abortControllerRef.current = new AbortController


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
            if (show && seasonTitle) {
                const season = show.seasons.find(
                    (season) => season.title === `Season ${seasonTitle}`
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
    }, [show, seasonTitle]);


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
                        <div className="card" key={ep.id}>
                            <img className="card-image" src={data.image}></img>
                            <div className="card-info">
                                <h1 className="card-title">{ep.title}</h1>
                                <h6 className="card-episodes">Ep {index + 1}</h6>
                                <h2 className="desc-title">Description</h2>
                                <p className="card-desc">{ep.description}</p>
                            </div>
                        </div>
                        {/* <audio controls>
                            <source src={ep.file} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio> */}
                    </>
                ))}
            </div>
        </div>
    );
}

export default Episodes;




