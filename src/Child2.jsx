import { memo } from 'react';

const Child2 = ({ value, setValue }) => {
  console.log('c2');
  return (
    <button onClick={setValue}>
      Increment2 - {value}
    </button>
  );
};
 
export default memo(Child2);
