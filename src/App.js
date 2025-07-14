import "./App.css";
import { useState } from "react";
import Result from "./components/gameResult";
import StartGame from "./components/startGame";
const secretNumber = Math.floor(Math.random() * 10) + 1;
function App() {
  const [guessNumber, setGuessNumber] = useState("");
  const [gameStart, setgameStart] = useState(false);
  const handleChange = (e) => {
    setGuessNumber(e.target.value);
  };
  return (
    <div className="container">
      {!gameStart ? (
        <StartGame onStart={() => setgameStart(true)} />
      ) : (
        <>
          <div className="header">
            <label htmlFor="guess">Guess the Number</label>
          </div>
          <input
            id="guess"
            placeholder="Enter the number from 1 to 10"
            type="number"
            name="number"
            onChange={handleChange}
          />
          <Result guessNumber={guessNumber} secretNumber={secretNumber} />
          <div className="footer">© 2025 $P | All Rights Reserved</div>
        </>
      )}
    </div>
  );
}

export default App;
