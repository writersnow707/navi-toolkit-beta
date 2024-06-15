import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    setNumber(randomNumber);
  };

  const openModal = () => {
    setIsOpen(true);
    generateRandomNumber();
  };

  const reset = () => {
    setNumber(null);
  };

  return (
    <div>
      <button onClick={openModal}>오늘의 주인공은?</button>
      {number && (
        <div>
          <h2>주인공 번호: {number}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
