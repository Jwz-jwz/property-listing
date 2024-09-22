import { HomeIcon } from "../svg/HomeIcon";
import { StarIcon } from "../svg/StarIcon";

export const ResultCard = ({ image, title, star, bathroom, bedroom, type }) => {
  return (
    <div className="flex gap-[30px] justify-between rounded-[20px] drop-shadow-lg">
      <div className="w-[50%] rounded-[20px]">
        <img src={image} alt="" />
      </div>
      <div className="w-[50%] flex flex-col gap-[5px]">
        <h1 className="text-[18px] font-[800] leading-[24.48px]">{title}</h1>
        <div className="flex gap-[10px] text-[15px] font-[300] leading-[20.04px]">
          <div className="flex gap-[3px]">
            <StarIcon />
            <p>{star}</p>
          </div>
          <p>Mercedes Vito</p>
        </div>
        <div className="flex gap-[5px]">
          <div>{bedroom} bedroom</div>
          <p className="border-r"></p>
          <div>{bathroom} bathroom</div>
          <p className="border-r"></p>
        </div>
        <div className="flex gap-[10px]">
          <HomeIcon />
          {type}
        </div>
      </div>
    </div>
  );
};
