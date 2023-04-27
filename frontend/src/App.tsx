import { useState } from 'react';
import './App.css';

function App() {
  const [pageProcessed, setPageProcessed] = useState(false)

  const testFunction = async () => {
    const response = await fetch('http://localhost:5000/');
    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="App">
        <div className="Container">
          <h1>Chat-GPT Anywhere</h1>
          {pageProcessed ? (
            <div>
              <input></input>
              <button>Send Prompt</button>
            </div>
          ) : (
            <div>
              <button onClick={() => testFunction()}>Process Page</button>
            </div>
          )}
        </div>
    </div>
  );
}

export default App;
