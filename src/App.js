import React from 'react';
import './App.css';
import Input from './Input';
import Music from './Music';
import rotta from './rotta.png';

const App = () => {

  const [state, setState] = React.useState("")

  const handleChange = (evt) => {
    setState(evt.target.value)
  }

  const playName = () => {
    //console.log(props.birthdayBoy)
    const msg = new SpeechSynthesisUtterance(state);
    msg.volume = 2.0
    msg.text = state;
    console.log(msg)
    window.speechSynthesis.speak(msg);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input handleChange={handleChange} playName={playName} />
        <img src={rotta} className="App-logo" alt="logo" />
        <Music playName={playName} />
      </header>
    </div>
  );
}

export default App;
