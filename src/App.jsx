import { createContext, useReducer } from 'react';

import './App.css';
import Child from './Child';

export const CountContext = createContext();

const App = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT1':
        return {
          ...state,
          count1: state.count1 + action.payload,
        };
      case 'INCREMENT2':
        return {
          ...state,
          count2: state.count2 + action.payload,
        };
      case 'DECREMENT1':
        return {
          ...state,
          count1: state.count1 - action.payload,
        };
      case 'DECREMENT2':
        return {
          ...state,
          count2: state.count2 - action.payload,
        };
      default:
        return state;
    }
  };

  const countInitialValue = {
    count1: 0,
    count2: 0,
  };

  const [count, setCount] = useReducer(countReducer, countInitialValue);

  return (
    <div className="App">
      <h1>Oi</h1>

      <CountContext.Provider value={{ count, setCount }}>
        <Child />
      </CountContext.Provider>
    </div>
  );
};

export default App;
