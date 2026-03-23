import { useState } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const [varA, setVarA] = useState(0);
    const [varB, setVarB] = useState(100);
    const [varC, setVarC] = useState(0);
    const [tries, setTries] = useState(0);
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
    
    const handleButtonClick = () => {
        const num = Number(number);
        if (num < 1 || num > 100) {
            document.querySelector('.subheading').textContent = "Please enter a number between 1 and 100.";
        }
        else {
            
            const newVarC = Math.floor((varA + varB) / 2);
            setVarC(newVarC);
            if (num == varC) {
                    setTries(tries + 1);
                    document.querySelector('.subheading').textContent = `The number is ${varC} and it took ${tries} tries to guess it!`;
                    
                    setTries(0);
                }
                else if (num < varC) {
                    setVarB(newVarC);
                    setTries(tries + 1);
                    

                }
                else if (num > varC) {
                    setVarA(newVarC);
                    setTries(tries + 1);
                    
                }
            }
        }
    

  return (
    <div className="flex items-center justify-center min-h-screen flex-col ">
      <h1 className="font-bold text-7xl text-center font-mono text-primary ">
        Number Guesser
      </h1>
      <h1 className="subheading font-medium text-3xl text-center mt-2 font-mono text-secondary">
        Simply guesses the number lol.
      </h1>

      <div className="flex items-center justify-center mt-10 ">
        <input
          type="text"
          placeholder="Enter a number between 1 and 100"
          className="bg-primary text-secondary placeholder:text-secondary focus:text-secondary border-none rounded-xl placeholder:text-center placeholder:text-3xl focus:border-none w-140 h-20 mt-20 text-center text-3xl "
          onChange={handleChange}
        />
        <button className="bg-secondary text-primary font-bold text-3xl rounded-xl w-40 h-20 ml-5 mt-20 hover:bg-secondary/80 transition duration-300" onClick={handleButtonClick}>
          Enter
        </button>
      </div>
    </div>
  );
}

export default App;
