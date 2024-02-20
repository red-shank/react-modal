import './App.css';
import '../../../src/styles/style.css';
import Modal, { ACTIONS } from '../../../src';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const onRenderModalAPI = () => {
    ACTIONS.push(
      <div style={{ background: 'white', padding: 20, borderRadius: 10 }}>
        <h1>Open with pushModal method</h1>
        <p>description here</p>
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>,
      {
        maskClosable: false
      }
    );
  };

  return (
    <div className="container">
      <h1>@redshank/react-modal</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <button onClick={() => setIsOpen(true)}>Open</button>
        <button onClick={onRenderModalAPI}>Open with API</button>
      </div>

      <Modal position="center" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ background: 'white', padding: 20, borderRadius: 10 }}>
          <h1>Reactivity Modal</h1>
          <p>{text}</p>

          <input
            value={text}
            placeholder="Insert text"
            style={{ marginBottom: 20 }}
            onChange={(e) => setText(e?.target?.value)}
          />
          <button onClick={() => setIsOpen2(true)}>Open</button>
        </div>
      </Modal>

      <Modal
        position="center"
        isOpen={isOpen2}
        onClose={() => setIsOpen2(false)}
      >
        <div style={{ background: 'white', padding: 20, borderRadius: 10 }}>
          <h1>Title 2</h1>
          <p>description 2</p>
        </div>
      </Modal>
    </div>
  );
}

export default App;
