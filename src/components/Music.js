import React, { useEffect } from 'react';
import ratList from '../ratList';

const Music = (props) => {
    const [rat, setRat] = React.useState(0)
    const [audio, setAudio] = React.useState(new Audio(ratList[rat]))

    useEffect(() => {
        if (rat != 0) {
            props.playName()
        }
        setTimeout(() => play(rat), 300)
    }, [rat])

    audio.addEventListener('ended', () => {
        setRat(rat + 1)
    });

    const play = (index) => {
        console.log(`current rat: ${rat}`)
        if (index > ratList.length) {
            setRat(0)
        }
        setAudio(new Audio(ratList[index]))
        audio.play()
    }

    return (
        <div className="playButton">
            <button onClick={() => play(0)}>Play it</button>
        </div>
    );
}

export default Music;