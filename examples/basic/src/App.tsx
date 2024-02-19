import './App.css';
import '../../../src/styles/style.css';
import Modal from '../../../src/index';

function App() {
  return (
    <div className="container">
      <h1>@redshank/react-modal</h1>
      <div className="container">
        <Modal position="left" isOpen onClose={console.log}>
          <h1 style={{ color: 'white' }}>Title</h1>
          <p>description</p>
        </Modal>
      </div>
    </div>
  );
}

export default App;
