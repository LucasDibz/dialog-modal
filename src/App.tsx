import { useState } from 'react';
import { Dialog } from './Dialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  console.log({ isOpen });
  return (
    <>
      <button type='button' onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <h1>HTML is amazing</h1>

        <p>Much wow</p>
      </Dialog>
    </>
  );
}

export default App;
