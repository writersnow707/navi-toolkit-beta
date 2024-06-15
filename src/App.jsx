import React, { useState } from "react";
import ModalComponent from "./components/ModalComponent/ModalComponent";
import DrawingComponent from "./components/DrawingComponent";
import RandomNumberComponent from "./components/RandomNumberComponent";
import MemoryGameComponent from "./components/MemoryGameComponent/MemoryGameComponent";
import SeatingArrangementComponent from "./components/SeatingArrangementComponent";
import TimerStopwatchComponent from "./components/TimerStopwatchComponent/TimerStopwatchComponent"
import YoutubeViewer from "./components/YoutubeViewer";
import "./App.css";
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

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
        {/* 상단 우측에 배치된 버튼 */}
        <button className="top-right-button">
          <MusicPlayer />
        </button>
        {/* 하단에 일렬로 나열된 버튼들 */}
        <div className="bottom-buttons">
          <button
            className="bottom-button"
            onClick={() => openModal(<DrawingComponent />)}
          >
            그림판
          </button>
          <button
            className="bottom-button"
            onClick={() => openModal(<RandomNumberComponent />)}
          >
            발표자 뽑기
          </button>
          <button
            className="bottom-button"
            onClick={() => openModal(<MemoryGameComponent />)}
          >
            카드 게임
          </button>
          <button
            className="bottom-button"
            onClick={() => openModal(<SeatingArrangementComponent />)}
          >
            자리 바꾸기
          </button>
          <button
            className="bottom-button"
            onClick={() => openModal(<TimerStopwatchComponent />)}
          >
            타이머
          </button>
          <button
            className="bottom-button"
            onClick={() => openModal(<YoutubeViewer />)}
          >
            영상 출력
          </button>
          <button
            className="bottom-button"
            onClick={() => openModal(<QRCodeGenerator />)}
          >
            QR코드 생성
          </button>
        </div>
        <ModalComponent isOpen={isOpen} onRequestClose={closeModal}>
          {modalContent}
        </ModalComponent>
      </div>
    </div>
  );
}

export default App;
