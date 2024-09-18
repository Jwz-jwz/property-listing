import { BottomIcon } from "../svg/BottomIcon";
import { HeaderIcon } from "../svg/HeaderIcon";
import { SearchIcon } from "../svg/SearchIcon";
import data from "../../mock/us-property-listings-100.json";

export const Header = () => {
  console.log(data);

  return (
    <div className="w-full flex justify-center p-[10px]">
      <div className="container flex ">
        <div className="w-[736px] flex gap-[26px]">
          <div className="flex items-center">
            <HeaderIcon />
          </div>
          <div className="flex rounded-l-lg border border-[#D3D3D3] py-[22px] px-[12px] gap-[10px]">
            <p className="text-[16px] font-[300] leading-[23.97px] flex items-center ">
              Rent
            </p>
            <div className="flex items-center">
              <BottomIcon />
            </div>
          </div>
          <div className="rounded-r-lg border border-red-500">
            <input className="w-[482px]" type="text" />
            <div>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
