import { LineIcon } from "../svg/LineSvg";
import { ResultCard } from "./ResultCard";

export const RightSide = ({
  searchValue,
  image,
  title,
  star,
  bathroom,
  bedroom,
  type,
}) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-[16px] font-[300] leading-[23.97px] ">430+ Stays</p>
      <h1 className="text-[36px] font-[800] leading-[24px]">
        Stays in {searchValue}
      </h1>
      <div className="w-full flex justify-between">
        <div className="flex gap-[20px]">
          <button className="btn btn-wide rounded-[30px] bg-[#DBDBFE80] text-[16px] font-[800] leading-[23.97px]">
            Free cancellation
          </button>
          <button className="btn btn-outline rounded-[30px] text-[16px] font-[300] leading-[23.97px] px-[40px]">
            Price
          </button>
          <button className="btn btn-outline rounded-[30px] text-[16px] font-[300] leading-[23.97px] px-[40px]">
            Instant Book
          </button>
        </div>
        <LineIcon />
      </div>
      <div>
        <ResultCard
          image={image}
          title={title}
          star={star}
          bathroom={bathroom}
          bedroom={bedroom}
          type={type}
        />
      </div>
    </div>
  );
};
