import { useState } from 'react';
import { Dialog } from './Dialog';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type='button' onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h1>Amazing dialog</h1>

          <p>Much wow</p>
        </div>
      </Dialog>
    </>
  );
}

export default App;
