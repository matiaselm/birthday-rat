import React from 'react';
import './App.css';
import Input from './components/Input';
import Music from './components/Music';
import Lyrics from './components/Text';
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
        <div className="inputContainer">
          <Music playName={playName} />
          <Input handleChange={handleChange} playName={playName} />
        </div>
      </header>
      <Lyrics name={state} />

      <div className="ratContainer">
        <img src={rotta} className="App-logo" alt="logo" />
        <img src={rotta} className="App-logo" alt="logo" />
        <img src={rotta} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
