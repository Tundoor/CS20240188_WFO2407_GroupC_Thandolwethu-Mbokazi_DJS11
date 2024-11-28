import { useEffect, useState } from "react"
import { Selection } from "../components/selection"
import NavBar from '../components/navbar'
import { Link } from "react-router-dom"


function Home() {
    const [pods, setPods] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // Fetches data from our API    

    useEffect(() => {
        fetch('https://podcast-api.netlify.app')

            .then(res => {
                if (!res.ok) {
                    throw Error("Data Fetching Failed") // This will be our error message
                }
                return res.json()
            })
            .then(data => {
                setPods(data);
                setLoading(false)
            }
            )
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            }
            )
    }, [])

    if (error) {
        return <p1 className="Error">Failed To Fetch Data</p1>
    }

    if (loading) {
        return <p1 className="loading">LOADING...</p1>
    }

    // Creates a new array of sorted titles 
    const sortedPods = pods.sort((a, b) => a.title.localeCompare(b.title))
    return (
        <>
            <NavBar />
            <div className="home-div">
                <div className="logo-div">
                    <h1 className="logo">PodSphere</h1>
                    <p>Where Every Story Finds A Listener</p>
                </div>
                <div className="main-div">
                    <h1 className="main-header">Our Selection</h1>
                    {/* Attempt to make this dynamic */}
                    <Selection />
                    <div className="main-cards" key={pods.id}>
                        {/*  Renders our shows on the browser */}
                        {sortedPods.map((pods) => (
                            <Link to={`podcast/id/${pods.id}`} className="link">
                                <div className="card" key={pods.id}>
                                    <img className="card-image" src={pods.image}></img>
                                    <div className="card-info">
                                        <h1 className="card-title">{pods.title}</h1>
                                        <h6 className="card-seasons">Seasons: {pods.seasons}</h6>
                                        <h6 className="card-episodes">Episodes: </h6>
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
    )
}

export default Home 