import React, { useRef, useState } from "react";

const DrawingComponent = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width="400"
      height="400"
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      style={{ border: "1px solid black" }}
    />
  );
};

export default DrawingComponent;
