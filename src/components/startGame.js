const StartGame = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h3>Welcome to Surya's Guess Royale</h3>
      <button className= "start-btn" onClick={onStart}>Start Game!</button>
    </div>
  );
};

export default StartGame;
