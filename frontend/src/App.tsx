import { useState } from 'react';
import './App.css';

function App() {
  const [pageProcessed, setPageProcessed] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState('')

  const testFunction = async () => {
    const response = await fetch("http://localhost:5000/complete_chat", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user_input": userInput
      }),
    });

    const data = await response.json();
    console.log(data)

    setMessage(data.message)
  }

  return (
    <div className="App">
        <div className="Container">
          <h1>Chat-GPT Anywhere</h1>
          {pageProcessed ? (
            <div>
              <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
              <button onClick={() => testFunction()}>Send Prompt</button>
              {message !== '' && (
                <p>{message}</p>
              )}
            </div>
          ) : (
            <div>
              <button onClick={() => setPageProcessed(true)}>Process Page</button>
            </div>
          )}
        </div>
    </div>
  );
}

export default App;
