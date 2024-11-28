import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Episodes() {
    const [episode, setEpisode] = useState([]);
    const [show, setShow] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state

    const params = useParams();


    //Handles the rendering of shows on the UI
    useEffect(() => {
        setLoading(true);

        // Fetch data from the API
        fetch(`https://podcast-api.netlify.app/id/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setData(data);

                if (data && data.id === params.id) {
                    setShow(data);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {

                setLoading(false);
            });
    }, [params.id]);


    useEffect(() => {
        if (show && params.seasonTitle) {
            const season = show.seasons.find(
                (season) => season.title === `Season ${params.seasonTitle}`
            );

            console.log('Season found:', season);

            if (season) {
                setEpisode(season.episodes);
            } else {
                setEpisode([]);
            }
        }
    }, [show, params.seasonTitle]);


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Episodes for {show.title}</h1>
            <ul>
                {episode.map((ep) => (
                    <li key={ep.episode}>
                        <h2>{ep.title}</h2>
                        <p>{ep.description}</p>
                        <audio controls>
                            <source src={ep.file} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Episodes;




