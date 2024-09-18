"use client";
import { BottomIcon } from "../svg/BottomIcon";
import { HeaderIcon } from "../svg/HeaderIcon";
import { SearchIcon } from "../svg/SearchIcon";
import data from "../../mock/us-property-listings-100.json";
import { PhoneIcon } from "../svg/PhoneIcon";
import { useState } from "react";
import { SearchCard } from "../utils/SearchCard";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isChange, setIsChange] = useState(true);
  const filteredValue = data?.properties?.filter((values) =>
    values?.City?.toLowerCase().includes(searchValue)
  );
  console.log(filteredValue);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="w-full flex justify-center mt-[20px]">
      <div className="container flex p-[10px]">
        <div className="w-[736px] h-[62px] flex gap-[26px]">
          <div className="flex items-center">
            <HeaderIcon />
          </div>
          <div className="flex">
            <div className="flex rounded-l-lg border border-[#D3D3D3] ">
              <details className="dropdown">
                <summary className="btn pt-2 pl-2 w-[150px] bg-white text-base font-[300] leading-[23.97px] border-none shadow-none">
                  Rent type <BottomIcon />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <a>Rent</a>
                  </li>
                  <li>
                    <a>Sell</a>
                  </li>
                </ul>
              </details>
            </div>
            <div className="rounded-r-lg flex">
              <input
                placeholder="Search"
                value={searchValue}
                onChange={handleInputChange}
                className="w-[482px] border border-y-[#D3D3D3]"
                type="text"
              />
              <div>
                {filteredValue.map((filtered) => {
                  return <SearchCard city={filtered?.City} />;
                })}
              </div>
              <button className="w-[62px] flex items-center justify-center bg-[#5E81F4] rounded-r-lg">
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[225px]"></div>
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
