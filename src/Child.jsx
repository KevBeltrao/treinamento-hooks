import { useContext } from 'react';

import { CountContext } from './App';
import AnotherChild from './AnotherChild';

const Child = () => {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h1>Count 1: {count.count1}</h1>
      <h1>Count 2: {count.count2}</h1>

      <AnotherChild />
    </div>
  );
}
 
export default Child;