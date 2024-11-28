import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Episodes() {
    const [episode, setEpisode] = useState([]);
    const [show, setShow] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state

    const params = useParams();


    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://podcast-api.netlify.app/id/${params.id}`);
                const data = await res.json();
                console.log(data);

                setData(data);

                if (data && data.id === params.id) {
                    setShow(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.id]);

    useEffect(() => {
        const loadSeasonData = async () => {
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
        };

        loadSeasonData();
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




