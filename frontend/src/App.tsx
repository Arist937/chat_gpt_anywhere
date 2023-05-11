import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

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
    <div className="app">
      <div className="flex justify-start items-center mt-2 mb-4 mx-1">
        <img className="w-8" src="chromelogo.ico"/>
        <h1 className="text-left mx-1 align-middle">Chrome-GPT</h1>
      </div>
      <div className="container h-400">
        {pageProcessed ? (
          <div className="h-full flex flex-col-reverse">
            <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button onClick={() => testFunction()}>Send Prompt</button>
            {message !== '' && (
              <p>{message}</p>
            )}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faCircleNotch} spin />
            <p onClick={() => setPageProcessed(true)}>Processing Page...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
