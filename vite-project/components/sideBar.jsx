import { Link } from "react-router-dom"

export default function SideBar() {
    return (
        <>
            <div className="sideBar">
                <div className="sidebar-btns">
                    <Link to="/favourites"><div className="favourites navBtn">
                        <img width="45" height="45" src="https://img.icons8.com/ios-filled/50/hearts.png" alt="hearts" />
                    </div>
                    </Link>
                    <Link to="/">
                        <div className="home navBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 24 24">
                                <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
                            </svg>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}