import { useState } from "react";
import { ResultCard } from "../mainpage/ResultCard";

function CardList() {
  const [selectedType, setSelectedType] = useState("all");

  const allCards = [
    { id: 1, title: "Card 1", type: "type1" },
    { id: 2, title: "Card 2", type: "type2" },
    { id: 3, title: "Card 3", type: "type1" },
    { id: 4, title: "Card 4", type: "type3" },
  ];

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };

  // Filter cards based on the selected type
  const filteredCards =
    selectedType === "all"
      ? allCards
      : allCards.filter((card) => card.type === selectedType);

  return (
    <div>
      <label htmlFor="cardType">Select Card Type:</label>
      <select id="cardType" value={selectedType} onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        <option value="type3">Type 3</option>
      </select>

      <div className="card-list">
        {filteredCards.map((card) => (
          <ResultCard key={card.id} title={card.title} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
