import { useState } from "react"

export default function SettingsModal({ closeModal,
    changeTheme,
    changeSortOrder,
    changeUpdateOrder }) {
    return (
        <div className="settingsDiv">
            <button className="closeModal" onClick={() => closeModal()}>X</button>

            <div className="orderDiv">
                <h1 className="order">Sort by Title</h1>
                <button className="A-Z" onClick={() => changeSortOrder('A-Z')}>A-Z</button>
                <button className="Z-A" onClick={() => changeSortOrder('Z-A')}>Z-A</button>
            </div>

            <div className="Update">
                <h1 className="mode">Updated</h1>
                <button className="mostUpdate" onClick={() => changeUpdateOrder('Most Recent')}> Most Recent Update</button>
                <button className="LeastUpdate" onClick={() => changeUpdateOrder('Least Recent')}>Least Recent Update</button>
            </div>


        </div>

    )
}
