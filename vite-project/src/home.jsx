import { useEffect, useState } from "react"

function Home() {
    const [pods, setPods] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

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
    return (
        <>
            <div className="home-div">
                <div className="logo-div">
                    <h1 className="logo">PodSphere</h1>
                    <p>Where Every Story Finds A Listener</p>
                </div>
                <div className="main-div">
                    <h1 className="main-header">Our Selection</h1>
                    <select name="All Genres" className="genre-dropDown">
                        <option value="allGenres">All Genres</option>
                    </select>
                    <div className="main-cards">
                        {/*  Renders our shows on the browser */}
                        {pods.map((pods) => (
                            <div className="card" key={pods.id}>
                                <img className="card-image" src={pods.image}></img>
                                <div className="card-info">
                                    <h1 className="card-title">{pods.title}</h1>
                                    <h6 className="card-seasons">Seasons:</h6>
                                    <h6 className="card-episodes">Episodes: </h6>
                                    <h2 className="desc-title">Description</h2>
                                    <p className="card-desc">{pods.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home 