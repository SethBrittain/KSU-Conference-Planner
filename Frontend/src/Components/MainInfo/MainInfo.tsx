import React from "react";

export const MainInfo = (): JSX.Element => {
  return (
    <div className="flex flex-col w-[379px] items-center gap-[34px] p-[40px] relative bg-[#d9d9d9]">
      <div className="relative w-[75px] h-[75px] bg-[#979797] rounded-[37.5px]" />
      <div className="flex flex-col items-center gap-[16px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] text-center tracking-[0] leading-[normal]">
          Heading 1
        </div>
        <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </div>
  );
};
