import { LeftSide } from "./LefSide";
import { RightSide } from "./RightSIde";

export const MainPage = () => {
  return (
    <div className="w-full flex justify-center mt-[30px]">
      <div className="container flex ">
        <div className="w-[50%]">
          <RightSide />
        </div>
        <div className="w-[50%]">
          <LeftSide />
        </div>
      </div>
    </div>
  );
};
