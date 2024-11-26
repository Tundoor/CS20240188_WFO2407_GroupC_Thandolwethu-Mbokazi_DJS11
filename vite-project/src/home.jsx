import { useEffect, useState } from "react"

function Home() {
    const [pods, setPods] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://podcast-api.netlify.app')
            .then(res => {
                if (!res.ok) {
                    throw Error("Data Fetching Failed") // This will be our error message
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setPods(data);
            }
            )
            .catch((error) => {
                setError(error.message)
            }
            )
    }, [])

    const firstPod = pods[0]

    return (
        <>
            <div className="home-div">
                <div className="logo-div">
                    <h1 className="logo">PodSphere</h1>
                    <p>Where Every Story Finds A Listener</p>
                </div>
                <div className="rec-div">
                    <h1 className="rec-header">Shows You Might Be Interested In</h1>
                    <div className="rec-cards">
                        {/*  Renders our shows on the browser */}
                        {pods.map((pods) => (
                            <div className="card">
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