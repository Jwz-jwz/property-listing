"use client";
import { BottomIcon } from "../svg/BottomIcon";
import { HeaderIcon } from "../svg/HeaderIcon";
import { SearchIcon } from "../svg/SearchIcon";
import { PhoneIcon } from "../svg/PhoneIcon";
import { SearchResult } from "./SearchResult";

export const Header = ({
  filteredValue,
  searchValue,
  handleInputChange,
  isOpen,
  selectedType,
  handleSelectChange,
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-[50px]">
      <div className="container flex justify-between mt-[20px]">
        <div className="w-[736px] h-[62px] flex gap-[26px]">
          <div className="flex items-center">
            <HeaderIcon />
          </div>
          <div className="flex">
            <div className="flex">
              {/* <label htmlFor="cardType">Select Card Type:</label> */}
              <select
                id="cardType"
                value={selectedType}
                onChange={handleSelectChange}
              >
                <option value="all">All</option>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className="rounded-r-lg flex border border-[#D3D3D3] ">
              <div className="w-[482px] flex flex-col gap-[5px] border-[#D3D3D3]">
                <div>
                  <input
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleInputChange}
                    className="w-full h-[62px]"
                    type="text"
                  />
                </div>
                <div
                  className={`
                  } button flex flex-col gap-[3px] ${
                    isOpen ? "h-[200px]" : "h-[0px]"
                  }`}
                >
                  {searchValue &&
                    filteredValue?.map((filtered) => {
                      return (
                        <button key={filtered.id}>
                          <SearchResult city={filtered.City} />
                        </button>
                      );
                    })}
                </div>
              </div>
              <button className="w-[62px] flex items-center justify-center bg-[#5E81F4] rounded-r-lg">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-[50px] items-center">
          <div className="flex gap-[20px]">
            <PhoneIcon />
            <p className="text-base font-[300] leading-[23.97px]">
              + 1 (800) 657 8976
            </p>
          </div>
          <div className="flex items-center gap-[22px]">
            <img
              className="w-[40px] h-[40px] flex items-center"
              src="./profile.png"
              alt=""
            />
            <p className="text-[16px] font-[800] leading-[23.97px]">Jon Doe</p>
            <button>
              <BottomIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
