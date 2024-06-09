import React, { useState } from "react";
import ModalComponent from "./components/ModalComponent";
import DrawingComponent from "./components/DrawingComponent";
import RandomNumberComponent from "./components/RandomNumberComponent";
import MemoryGameComponent from "./components/MemoryGameComponent";
import SeatingArrangementComponent from "./components/SeatingArrangementComponent";
import TimerStopwatchComponent from "./components/TimerStopwatchComponent/TimerStopwatchComponent"
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <div className="App">
      <div className="button-container">
        <button onClick={() => openModal(<DrawingComponent />)}>Drawing</button>
        <button onClick={() => openModal(<RandomNumberComponent />)}>
          Random Number
        </button>
        <button onClick={() => openModal(<MemoryGameComponent />)}>
          Memory Game
        </button>
        <button onClick={() => openModal(<SeatingArrangementComponent />)}>
          Seating Arrangement
        </button>
        <button onClick={() => openModal(<TimerStopwatchComponent />)}>
          Timer/Stopwatch
        </button>
      </div>
      <ModalComponent isOpen={isOpen} onRequestClose={closeModal}>
        {modalContent}
      </ModalComponent>
    </div>
  );
}

export default App;
