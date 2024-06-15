import React, { useState, useRef, useEffect } from "react";
import { FaPen, FaEraser } from "react-icons/fa"; // 펜과 지우개 아이콘

const DrawingComponent = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState("#000000");
  const [penWidth, setPenWidth] = useState(5);
  const [isEraser, setIsEraser] = useState(false); // 지우개 모드 추가

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setContext(ctx);
    ctx.lineCap = "round";
    ctx.lineWidth = penWidth;
    ctx.strokeStyle = penColor;
  }, [penColor, penWidth]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    context.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.download = "drawing.png";
    downloadLink.click();
  };

  const handleEraser = () => {
    setIsEraser(true); // 지우개 모드 활성화
    setPenColor("#ffffff"); // 지우개는 흰색으로 설정
  };

  const handlePen = () => {
    setIsEraser(false); // 펜 모드 활성화
    setPenColor("#000000"); // 펜 색상 설정
  };

  const handlePenWidthChange = (event) => {
    setPenWidth(event.target.value);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{ border: "1px solid black" }}
      />
      <div>
        <button onClick={handleSave}>Save</button>
        <button onClick={clearCanvas}>Clear All</button>
        <button onClick={handleEraser}>
          <FaEraser /> Eraser
        </button>{" "}
        {/* 지우개 버튼 */}
        <button onClick={handlePen}>
          <FaPen /> Pen
        </button>{" "}
        {/* 펜 버튼 */}
        <input
          type="range"
          min={1}
          max={20}
          value={penWidth}
          onChange={handlePenWidthChange}
        />
      </div>
      <div>
        {/* 현재 선택된 도구에 따라 아이콘 표시 */}
        {isEraser ? <FaEraser /> : <FaPen />}
        <span>{isEraser ? "Eraser" : "Pen"}</span>
      </div>
    </div>
  );
};

export default DrawingComponent;
