import React, { useState } from "react";

const RandomNumberComponent = () => {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    setNumber(randomNumber);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>오늘의 발표자는?</button>
      {number && <p>발표자: {number}번</p>}
    </div>
  );
};

export default RandomNumberComponent;
