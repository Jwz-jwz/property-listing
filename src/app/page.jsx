"use client";
import { Header } from "@/components/header/Header";
import data from "../mock/us-property-listings-100.json";
import { useState } from "react";
import { MainPage } from "@/components/mainpage/MainPage";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setIsOpen(true);
  };
  const filteredValue = data?.filter((values) =>
    values?.City?.toLowerCase().includes(searchValue)
  );
  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };
  const filteredCards =
    selectedType === "all"
      ? data
      : data.filter((card) => card.type === selectedType);

  return (
    <div>
      <Header
        data={data}
        filteredValue={filteredValue}
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        isOpen={isOpen}
        selectedType={selectedType}
        filteredCards={filteredCards}
        handleSelectChange={handleSelectChange}
      />

      <MainPage searchValue={searchValue} filteredCards={filteredCards} />
    </div>
  );
}
