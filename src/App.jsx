import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(100);
  const [varC, setVarC] = useState(0);
  const [tries, setTries] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGuessing, setIsGuessing] = useState(false);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleButtonClick = async () => {
    const num = Number(number);
    if (num < 1 || num > 100) {
      document.querySelector(".subheading").textContent =
        "Please enter a number between 1 and 100.";
      return;
    }

    setIsGuessing(true);
    try {
      let a = 0;
      let b = 100;
      let guess = 0;
      let attempts = 0;

      while (true) {
        guess = Math.floor((a + b) / 2);
        attempts++;

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (num === guess) {
          document.querySelector(".subheading").textContent =
            `The number is ${guess} and it took ${attempts} tries to guess it!`;
          document.querySelector(".mainInput").value = "";
          setIsGameOver(true);
          break;
        } else if (num < guess) {
          document.querySelector(
            ".subheading"
          ).textContent = `I guessed ${guess}, but it's too high!`;
          b = guess;
        } else {
          document.querySelector(
            ".subheading"
          ).textContent = `I guessed ${guess}, but it's too low!`;
          a = guess;
        }
      }
    } finally {
      setIsGuessing(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen flex-col ">
      <h1 className="font-bold text-7xl text-center font-mono text-primary ">
        Number Guesser
      </h1>
      <h1 className="subheading font-medium text-3xl text-center mt-2 font-mono text-secondary">
        Simply guesses the number lol.
      </h1>
      {isGameOver ? (
        <div className="flex items-center justfy-center flex-col mt-10 gap-0">
          <h1 className="font-bold text-5xl text-center font-mono text-primary mt-5">
            Game Over!
          </h1>
          <button
            className="bg-secondary text-primary font-bold text-3xl rounded-xl w-45 h-20 mt-5 hover:bg-secondary/80 transition duration-300 p-3"
            onClick={() => setIsGameOver(false)}
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-10 ">
          <input
            type="text"
            placeholder="Enter a number between 1 and 100"
            className="mainInput bg-primary text-secondary placeholder:text-secondary focus:text-secondary border-none rounded-xl placeholder:text-center placeholder:text-3xl focus:border-none w-140 h-20 mt-20 text-center text-3xl "
            onChange={handleChange}
            disabled={isGuessing}
          />
          <button
            className="bg-secondary text-primary font-bold text-3xl rounded-xl w-40 h-20 ml-5 mt-20 hover:bg-secondary/80 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleButtonClick}
            disabled={isGuessing}
          >
            {isGuessing ? "Guessing..." : "Enter"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;