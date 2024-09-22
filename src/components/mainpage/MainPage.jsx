import { LineIcon } from "../svg/LineSvg";
import { LeftSide } from "./LefSide";
import { ResultCard } from "./ResultCard";

export const MainPage = ({ searchValue, filteredCards }) => {
  return (
    <div className="w-full flex justify-center mt-[30px]">
      <div className="container flex gap-[30px]">
        <div className="w-[50%] flex flex-col gap-[30px] ">
          <p className="text-[16px] font-[300] leading-[23.97px] ">
            430+ Stays
          </p>
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
          <div className="flex flex-col gap-[30px]">
            {filteredCards.map((card) => {
              return (
                <ResultCard
                  key={card.id}
                  image={card.imageUrl}
                  title={card.title}
                  star={card.star}
                  bathroom={card.bathroom}
                  bedroom={card.bedroom}
                  type={card.type}
                />
              );
            })}
          </div>
        </div>
        <div className="w-[50%]">
          <LeftSide />
        </div>
      </div>
    </div>
  );
};
