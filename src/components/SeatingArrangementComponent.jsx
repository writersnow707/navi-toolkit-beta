import React, { useState } from "react";

const SeatingArrangementComponent = () => {
  const initialSeats = Array.from({ length: 30 }, (_, i) => i + 1);
  const [seats, setSeats] = useState(initialSeats);

  const shuffleSeats = () => {
    const shuffled = [...seats].sort(() => Math.random() - 0.5);
    setSeats(shuffled);
  };

  return (
    <div>
      <button onClick={shuffleSeats}>자리바꾸기</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 50px)",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        {seats.map((seat, index) => (
          <div
            key={index}
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
            }}
          >
            {seat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatingArrangementComponent;
