import { useContext } from 'react';

import { CountContext } from './App';

const AnotherChild = () => {
  const { setCount } = useContext(CountContext);

  return (
    <div>
      <button onClick={() => {
        setCount({
          type: 'INCREMENT1',
          payload: 5,
        });
      }}>Increment 1</button>

      <button onClick={() => {
        setCount({
          type: 'DECREMENT1',
          payload: 3,
        });
      }}>Decrement 1</button>

      <button onClick={() => {
        setCount({
          type: 'INCREMENT2',
          payload: 1,
        });
      }}>Increment 2</button>

      <button onClick={() => {
        setCount({
          type: 'DECREMENT2',
          payload: 2,
        });
      }}>DEcrement 2</button>

    </div>
  );
};
 
export default AnotherChild;