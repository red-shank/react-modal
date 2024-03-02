import './App.css';
import '../../../src/styles/style.scss';
import Modal, { ACTIONS } from '../../../src';
import { useState } from 'react';

import ModalContent from '../../../src/components/ModalContent';
import ModalHeader from '../../../src/components/ModalHeader/ModalHeader';
import ModalFooter from '../../../src/components/ModalFooter';
import ModalBody from '../../../src/components/ModalBody';
import ModalTitle from '../../../src/components/ModalTitle';

function App() {
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const onRenderModalAPI = () => {
    ACTIONS.push(
      <ModalContent width="sm">
        <ModalHeader>
          <h2>Open with pushModal method</h2>
        </ModalHeader>

        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          consequatur debitis deleniti dicta dolore doloremque eius et illo
          natus nostrum, numquam obcaecati porro quidem rem repellendus
          reprehenderit totam velit, voluptatem!
        </ModalBody>

        <ModalFooter>
          <button onClick={() => setIsOpen(true)}>Open</button>
        </ModalFooter>
      </ModalContent>,
      {
        maskClosable: false
      }
    );
  };

  return (
    <>
      <div className="navbar">
        <img
          src="https://www.redshank.app/brand.svg"
          alt="redshank"
          width={60}
        />
        <p>Redshank</p>
      </div>

      <div className="container">
        <h1>@redshank/react-modal</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <button onClick={() => setIsOpen(true)}>Open</button>
          <button onClick={onRenderModalAPI}>Open with API</button>
        </div>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalContent scrollable width="full">
            <ModalHeader isFixing>
              <ModalTitle>Reactivity Modal</ModalTitle>
            </ModalHeader>
            <ModalBody style={{ width: 500, margin: 'auto' }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam consectetur cumque doloremque fugit magni nobis
                reiciendis sapiente vel velit voluptas! At doloremque sapiente
                similique! Dolore dolorem excepturi harum provident quam? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Animi
                aspernatur, cum eos, ex explicabo in itaque iure modi non
                placeat porro quae quas quidem rem repellat repudiandae sapiente
                unde vel! Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. <br /> <br /> A eaque, hic impedit ipsa odit sint soluta
                ullam? Nobis tempore temporibus voluptatum. A aspernatur autem
                libero molestiae officia recusandae, sunt voluptate. <br /> A
                eaque, hic impedit ipsa odit sint soluta ullam? Nobis tempore
                temporibus voluptatum. A aspernatur autem libero molestiae
                officia recusandae, sunt voluptate. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aperiam consectetur cumque
                doloremque fugit magni nobis reiciendis sapiente vel velit
                voluptas! At doloremque sapiente similique! Dolore dolorem
                excepturi harum provident quam? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi aspernatur, cum eos, ex
                explicabo in itaque iure modi non placeat porro quae quas quidem
                rem repellat repudiandae sapiente unde vel! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. <br /> <br /> A eaque,
                hic impedit ipsa odit sint soluta ullam? Nobis tempore
                temporibus voluptatum. A aspernatur autem libero molestiae
                officia recusandae, sunt voluptate. <br /> A eaque, hic impedit
                ipsa odit sint soluta ullam? Nobis tempore temporibus
                voluptatum. A aspernatur autem libero molestiae officia
                recusandae, sunt voluptate. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aperiam consectetur cumque
                doloremque fugit magni nobis reiciendis sapiente vel velit
                voluptas! At doloremque sapiente similique! Dolore dolorem
                excepturi harum provident quam? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi aspernatur, cum eos, ex
                explicabo in itaque iure modi non placeat porro quae quas quidem
                rem repellat repudiandae sapiente unde vel! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. <br /> <br /> A eaque,
                hic impedit ipsa odit sint soluta ullam? Nobis tempore
                temporibus voluptatum. A aspernatur autem libero molestiae
                officia recusandae, sunt voluptate. <br /> A eaque, hic impedit
                ipsa odit sint soluta ullam? Nobis tempore temporibus
                voluptatum. A aspernatur autem libero molestiae officia
                recusandae, sunt voluptate. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aperiam consectetur cumque
                doloremque fugit magni nobis reiciendis sapiente vel velit
                voluptas! At doloremque sapiente similique! Dolore dolorem
                excepturi harum provident quam? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi aspernatur, cum eos, ex
                explicabo in itaque iure modi non placeat porro quae quas quidem
                rem repellat repudiandae sapiente unde vel! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. <br /> <br /> A eaque,
                hic impedit ipsa odit sint soluta ullam? Nobis tempore
                temporibus voluptatum. A aspernatur autem libero molestiae
                officia recusandae, sunt voluptate. <br /> A eaque, hic impedit
                ipsa odit sint soluta ullam? Nobis tempore temporibus
                voluptatum. A aspernatur autem libero molestiae officia
                recusandae, sunt voluptate. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aperiam consectetur cumque
                doloremque fugit magni nobis reiciendis sapiente vel velit
                voluptas! At doloremque sapiente similique! Dolore dolorem
                excepturi harum provident quam? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Animi aspernatur, cum eos, ex
                explicabo in itaque iure modi non placeat porro quae quas quidem
                rem repellat repudiandae sapiente unde vel! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. <br /> <br /> A eaque,
                hic impedit ipsa odit sint soluta ullam? Nobis tempore
                temporibus voluptatum. A aspernatur autem libero molestiae
                officia recusandae, sunt voluptate. <br /> A eaque, hic impedit
                ipsa odit sint soluta ullam? Nobis tempore temporibus
                voluptatum. A aspernatur autem libero molestiae officia
                recusandae, sunt voluptate.
              </p>

              <p>{text}</p>
              <input
                value={text}
                placeholder="Insert text"
                className="custom-input"
                style={{ marginBottom: 20 }}
                onChange={e => setText(e?.target?.value)}
              />
            </ModalBody>
            <ModalFooter position="end" isFixing>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur dolor dolorem dolorum ea facere illo in laborum modi
                nihil nisi numquam, obcaecati officia officiis quidem quisquam
                reprehenderit totam unde voluptatum.
              </p>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default App;
