import { useState } from 'react'

const [number, setNumber] = useState(0);



function App() {
  
handleChange = (e) => {
    setNumber(e.target.value);
}

    return (
        <div className="flex items-center justify-center min-h-screen flex-col ">
            <h1 className = "font-bold text-7xl text-center font-mono text-primary ">  
                Number Guesser
            </h1>
            <h1 className=" font-medium text-3xl text-center mt-2 font-mono text-secondary">
                Simply guesses the number lol.
            </h1>

            <div className="flex items-center justify-center mt-10 ">
                <input type="text" placeholder="Enter a number" className="bg-primary text-secondary placeholder:text-secondary focus:text-secondary border-none rounded-xl placeholder:text-center placeholder:text-3xl focus:border-none w-140 h-20 mt-20 text-center text-3xl " onChange={handleChange} />
                <button className = "bg-secondary text-primary font-bold text-3xl rounded-xl w-40 h-20 ml-5 mt-20 hover:bg-secondary/80 transition duration-300">
                    Enter
                </button>

            </div>
        </div>
    )
}

export default App