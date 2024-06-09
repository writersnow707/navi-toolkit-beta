import React, { useState, useEffect } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const MemoryGameComponent = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const cardValues = Array.from({ length: 8 }, (_, i) => i + 1);
    const initialCards = shuffleArray([...cardValues, ...cardValues]);
    setCards(initialCards);
  }, []);

  const handleCardClick = (index) => {
    if (flipped.length === 2) return;

    if (flipped.includes(index)) return;

    setFlipped((prev) => [...prev, index]);

    if (flipped.length === 1) {
      const firstIndex = flipped[0];
      if (cards[firstIndex] === cards[index]) {
        setMatched((prev) => [...prev, firstIndex, index]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 100px)",
        gap: "10px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(index)}
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:
              flipped.includes(index) || matched.includes(index)
                ? "lightblue"
                : "gray",
            cursor: "pointer",
            fontSize: "24px",
          }}
        >
          {(flipped.includes(index) || matched.includes(index)) && card}
        </div>
      ))}
    </div>
  );
};

export default MemoryGameComponent;
