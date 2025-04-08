import { useEffect, useState } from "react";
import { Selection } from "../components/selection";
import NavBar from '../components/navbar';
import { Link } from "react-router-dom";

function Home() {
    const [pods, setPods] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState("allGenres");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateOrder, setUpdateOrder] = useState("Most Recent");
    const [sortOrder, setSortOrder] = useState("A-Z");


    // Fetches data from our API    
    useEffect(() => {
        fetch('https://podcast-api.netlify.app')
            .then(res => {
                if (!res.ok) {
                    throw Error("Data Fetching Failed");
                }
                return res.json();
            })
            .then(data => {
                setPods(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const switchTheme = () => {

    }

    // Sort podcasts by title  (A-Z or Z-A)
    const sortByTitle = (pods) => {
        return [...pods].sort((a, b) => {
            if (sortOrder === "A-Z") {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });
    };

    // Sort podcasts by update date (most recent or least recent)
    const sortByDate = (pods) => {
        return [...pods].sort((a, b) => {
            if (updateOrder === "Most Recent") {
                return new Date(b.updated) - new Date(a.updated); // Most recent first
            } else {
                return new Date(a.updated) - new Date(b.updated); // Least recent first
            }
        });
    };

    const changeUpdateOrder = (newUpdateOrder) => setUpdateOrder(newUpdateOrder);

    // Genre matching 
    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    // Filter the podcasts based on selected genre
    const filteredPods = selectedGenre === "allGenres"
        ? pods
        : pods.filter(pod => pod.genres.includes(parseInt(selectedGenre)));

    // Apply sorting logic
    let sortedPods = sortByDate(filteredPods)
    if (error) {
        return <p1 className="Error">Failed To Fetch Data</p1>;
    }

    if (loading) {
        return <p1 className="loading">LOADING...</p1>;
    }

    return (
        <>
            <NavBar />

            <div className="home-div">
                <div className="main-div">
                    <h1 className="main-header">Our Selection</h1>
                    <div className="settings">
                        {/* Attempt to make this dynamic */}
                        <Selection onGenreChange={handleGenreChange} />
                        <div className="Update">
                            <button className="mostUpdate" onClick={() => changeUpdateOrder('Most Recent')}> Most Recent Update</button>
                            <button className="LeastUpdate" onClick={() => changeUpdateOrder('Least Recent')}>Least Recent Update</button>
                        </div>
                    </div>

                    <div className="main-cards" key={pods.id}>
                        {/*  Renders our shows on the browser */}
                        {sortedPods.map((pods) => (
                            <Link to={`podcast/id/${pods.id}`} className="link" key={pods.id}>
                                <div className="card">
                                    <img className="card-image" src={pods.image} alt={pods.title} />
                                    <div className="card-info">
                                        <h1 className="card-title">{pods.title}</h1>
                                        <h6 className="card-seasons">Seasons: {pods.seasons}</h6>
                                        <h6 className="card-episodes">Updated On: {new Date(pods.updated).toDateString()} </h6>
                                        <h2 className="desc-title">Description</h2>
                                        <p className="card-desc">{pods.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;