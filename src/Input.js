import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input id='nameInput' type='text' value={props.state} className="nameInput" onChange={props.handleChange}></input>
            <button style={{ color: props.color }} onClick={props.playName} >Say it</button>
        </div>
    );
}

export default Input;