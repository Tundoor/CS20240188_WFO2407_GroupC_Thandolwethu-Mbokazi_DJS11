import { useState } from "react"

export default function SettingsModal({ closeModal }) {
    return (
        <div className="settingsDiv">
            <button className="closeModal" onClick={() => closeModal()}>X</button>

            <div className="Update">
                <button className="mostUpdate"> Most Recent Update</button>
                <button className="LeastUpdate">Least Recent Update</button>
            </div>

            <div className="DarkMode">
                <button className="Light">Light Mode</button>
                <button className="Dark">Dark Mode</button>
            </div>

            <div className="orderDiv">
                <h1 className="order">lexicographical order</h1>
                <button className="A-Z">A-Z</button>
                <button className="Z-A">Z-A</button>
            </div>

        </div>

    )
}
