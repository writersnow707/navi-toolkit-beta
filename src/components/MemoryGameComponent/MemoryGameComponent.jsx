import React, { useState, useEffect } from "react";

const MemoryGameComponent = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [pairsFound, setPairsFound] = useState(0);

  useEffect(() => {
    const cardValues = Array.from({ length: 8 }, (_, i) => i + 1);
    const shuffledCards = [...cardValues, ...cardValues].sort(
      () => Math.random() - 0.5
    );
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }
    setFlippedCards((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
        setPairsFound((prev) => prev + 1);
      }
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards, cards]);

  const handleStartGame = () => {
    const cardValues = Array.from({ length: 8 }, (_, i) => i + 1);
    const shuffledCards = [...cardValues, ...cardValues].sort(
      () => Math.random() - 0.5
    );
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setPairsFound(0);
  };

  const remainingPairs = 8 - pairsFound;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Memory Game</h2>
      <button onClick={handleStartGame}>Start Game</button>
      <p>Pairs Found: {pairsFound}</p>
      <p>Remaining Pairs: {remainingPairs}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 100px)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              width: "100px",
              height: "100px",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: matchedCards.includes(index)
                ? "purple"
                : flippedCards.includes(index)
                ? "white"
                : "gray",
            }}
          >
            {(flippedCards.includes(index) || matchedCards.includes(index)) &&
              card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGameComponent;
