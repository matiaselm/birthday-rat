import React, { useEffect } from 'react';
import ratList from './ratList';

const Music = (props) => {
    const [rat, setRat] = React.useState(0)
    const [audio, setAudio] = React.useState(new Audio(ratList[rat]))

    useEffect(() => {
        props.playName()
        setTimeout(() => play(rat), 500)
    }, [rat])

    audio.addEventListener('ended', () => {
        setRat(rat + 1)
    });

    const play = (index) => {
        console.log(`current rat: ${rat}`)
        setAudio(new Audio(ratList[index]))
        audio.play()
    }

    return (
        <div>
            <button onClick={() => play(rat)}>Play</button>
        </div>
    );
}

export default Music;