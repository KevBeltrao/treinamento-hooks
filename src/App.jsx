import { useState } from 'react';

import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        setTasks([
          ...tasks,
          inputValue,
        ]);

        setInputValue('');
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}  
        />

        <button type="submit">Save</button>
      </form>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={task}>
            {task}
            <button onClick={() => {
              setTasks(tasks.filter((t, taskIndex) => taskIndex !== index));
            }}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
