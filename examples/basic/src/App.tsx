import './App.css';
import '../../../src/styles/style.css';
import Modal, { ACTIONS } from '../../../src';
import { useState } from 'react';

import ModalContent from '../../../src/components/ModalContent';
import ModalHeader from '../../../src/components/ModalHeader/ModalHeader';
import ModalBody from '../../../src/components/ModalBody';
import ModalFooter from '../../../src/components/ModalFooter';

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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent width="full">
          <ModalHeader>
            <h1>Reactivity Modal</h1>
          </ModalHeader>
          <ModalBody>
            <p>{text}</p>
            <input
              value={text}
              placeholder="Insert text"
              className="custom-input"
              style={{ marginBottom: 20 }}
              onChange={e => setText(e?.target?.value)}
            />
          </ModalBody>
          <ModalFooter position="end">
            <button className="close-button" onClick={() => setIsOpen(false)}>
              Close
            </button>
            <button onClick={() => setIsOpen2(true)}>Action</button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)}>
        <ModalContent>
          <ModalHeader>
            <h1>Title 2</h1>
          </ModalHeader>
          <ModalBody>
            <p>Description 2</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
