import React, { useEffect } from 'react'

const Lyrics = (props) => {

    const [text, setText] = React.useState("")
    useEffect(() => {
        setText(
            `Rats 🐀 rats 🐀 we are the rats🐀 \n
    Celebrating 🥳 yet another wana birthday 🎂 bash \n
    ${props.name}, its your birthday 🎁 today \n
    Cake 🍰 and ice - cream🍦is on its way \n
    And ${props.name}'s been such a good boy 👱🏻‍♂️ this year \n
    Open up your gifts 🎁 while we all cheer 😁`)
    }, [props.name])

    return (
        <>
            <p className='lyrics'>{text}</p>
        </>
    )
}

export default Lyrics