function AudioToggle() {

    return (
        <>
            <div className="audio-card">
                <button className="audio-button">X</button>

                <div className="audio-info">
                    <img className="audio-image" src=""></img>
                    <audio controls >
                        <source src="" type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

            </div>
        </>
    )
}

export default AudioToggle 