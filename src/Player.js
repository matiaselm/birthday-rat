import React from 'react';
import rats from './rats.mp3';
import ratList from './ratList';

function Player(props) {
    const [currentRat, setCurrentRat] = React.useState(0)

    async function playPart(index) {
        setCurrentRat(index)
        console.log(`currentRat: ${currentRat}`)
        const audioElement = document.getElementsByClassName("audio-element")[0]
        await audioElement.play()
    }

    function playAudio() {
        for (let i = 0; i < ratList.length; i++) {
            playPart(i)
        }
    }

    return (
        <div className="Player">
            <audio className="audio-element">

                <source src={rats} />
            </audio>
            <button style={{ color: props.color }} onClick={playAudio} >
                Play
            </button>
        </div>
    );
}



export default Player;