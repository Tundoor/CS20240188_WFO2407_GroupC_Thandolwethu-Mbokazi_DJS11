import { useState } from "react"

export default function SettingsModal({ closeModal }) {
    return (
        <div className="settingsDiv">
            <button className="closeModal" onClick={() => closeModal()}>X</button>
            <div>    <h1 className="themes">Themes</h1>
                <input className="divToggle" type="checkbox" />
                <label className="DarkMode"></label>
                <h1>Light Mode</h1>
                <h1>Dark Mode</h1>
                <h1 className="order">lexicographical order</h1>
            </div>
        </div>
    )
}
