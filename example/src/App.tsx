import React, { ChangeEvent, useState } from 'react';
import '@redshank/react-modal/lib/styles/style.css';
import Modal, { PositionType } from '@redshank/react-modal';

function App() {
  const [position, setPosition] = useState<PositionType>();
  const [duration, setDuration] = useState<number>(7000);

  const onChangePosition = (e: ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as PositionType);
  };

  const onChangeDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value ?? 0, 10));
  };

  return (
    <>
      <h1>@redshank/react-modal</h1>
      <div className="container">
        <Modal maskClosable animation="" position="center" isOpen onClose={console.log}>
          <h1>Title</h1>
          <p>description</p>
        </Modal>
      </div>
    </>
  );
}

export default App;
