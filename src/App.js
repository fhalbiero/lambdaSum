import React, { useState } from 'react';
import { API } from 'aws-amplify';


function App() {

  const [ value1, setValue1 ] = useState(0);
  const [ value2, setValue2 ] = useState(0);
  const [ result, setResult ] = useState(0);


  async function handleSum(event) {
    try {
      const data = await API.post('lambdasumapi', '/sum', {
        body: {
          value1,
          value2
        }
      });
      
      setResult(data.result);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="app">
      <header className="App-header">
        <h1>Lambda Sum</h1>
      </header>

      <div>
          <input 
            type="number"
            name="value1"
            placeholder="Value 1"
            onChange={(e) => setValue1(Number(e.target.value))}
            value={value1}
          />
          <input 
            type="number"
            name="value2"
            placeholder="Value 2"
            onChange={(e) => setValue2(Number(e.target.value))}
            value={value2}
          />

          <button type="button" onClick={handleSum}>SUM</button>

          <h1 className="result">Result: {result} </h1>
      </div>
    </div>
  );
}

export default App;
