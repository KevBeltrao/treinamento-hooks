import { memo } from 'react';

const Child1 = ({ value, setValue, color }) => {
  console.log('c1');
  return (
    <button style={{ color }} onClick={setValue}>
      Increment1 - {value}
    </button>
  );
};
 
export default memo(Child1);
