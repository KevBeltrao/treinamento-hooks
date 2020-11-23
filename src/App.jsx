import { useRef } from 'react';

import './App.css';

const App = () => {
  const count = useRef(0);
  let count2 = 0;

  const inputRef = useRef();

  const buttonRef = useRef();

  return (
    <div className="App">
      <h1>{count.current}</h1>

      <input
        type="text"
        ref={inputRef}
      />

      <button onClick={() => {
        inputRef.current.value += 'Valor';
        console.log(inputRef.current);
        
        buttonRef.current.click();
        inputRef.current.focus();
        // count.current += 1;
        // count2 += 1;

        // console.log('count', count.current);
        // console.log('count2', count2);
      }}>Increment</button>

      <button
        onClick={() => alert('CLICOU')}
        ref={buttonRef}  
      >Alert</button>
    </div>
  );
};

export default App;
