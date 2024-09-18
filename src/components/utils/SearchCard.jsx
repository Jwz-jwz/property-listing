import { CloseIcon } from "../svg/CloseIcon";

export const SearchCard = ({ city }) => {
  return (
    <div className="w-full bg-[#F6C002] text-[16px] font-[300] leading-[23.97px] rounded-[8px] px-[5px] py-[15px] flex gap-[10px] text-[#3E4958]">
      <p>{city}</p>
      <button>
        <CloseIcon />
      </button>
    </div>
  );
};
