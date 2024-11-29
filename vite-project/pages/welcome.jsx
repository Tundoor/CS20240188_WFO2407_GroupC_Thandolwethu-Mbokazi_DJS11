import { Link } from "react-router-dom"

export default function Welcome() {


    return (
        <div className="welcome">
            <div className="greeting">
                <h1 className="greeting">Welcome</h1>
                <h2>To</h2>
                <h1 className="brandName">PODSPHERE</h1>
            </div>
            <Link className="toHome" to="/home" >Open</Link>
        </div>
    )
}