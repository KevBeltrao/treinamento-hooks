import { useEffect } from 'react';

const Child2 = () => {
  useEffect(() => {
    const handleMouseLeave = () => {
      alert('Já vai embora?');
    }

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >2</div>
  );
};

 
export default Child2;