import React from "react";
import { Button } from "../../Button/Button";
import { MainInfo } from "../../MainInfo/MainInfo";
import { NavbarsGeneric } from "../../Navbar/Navbar";
import { PhotosAndInfo } from "../../PhotosAndInfo/PhotosAndInfo";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] w-[1440px] h-[2236px] relative">
        <div className="absolute w-[1440px] h-[304px] top-[1932px] left-0 bg-[#d9d9d9]" />
        <div className="absolute w-[1440px] h-[1932px] top-0 left-0">
          <div className="flex flex-col w-[1440px] h-[1872px] items-center gap-[30px] absolute top-[60px] left-0">
            <div className="flex h-[376px] items-end justify-end gap-[10px] p-[10px] relative self-stretch w-full bg-[#d9d9d9]">
              <Button
                className="!h-[88px] !mb-[-3.00px] !flex !bg-[#906397] !w-[251px]"
                icon="none"
                size="xl"
                state="focus"
                text="Current Sessions"
                textClassName="!mr-[-13.00px] !tracking-[0] !ml-[-19.00px] !text-[28px] ![font-style:unset] !font-semibold ![font-family:'Inter-SemiBold',Helvetica] !leading-[42px]"
                type="primary"
              />
              <Button
                className="!h-[88px] !mr-[-3.00px] !mb-[-3.00px] !flex !bg-[#906397] !w-[251px]"
                icon="none"
                size="xl"
                state="focus"
                text="Join The Event"
                textClassName="!mr-[-11.00px] !tracking-[0] !ml-[-17.00px] !text-[32px] ![font-style:unset] !font-semibold ![font-family:'Inter-SemiBold',Helvetica] !leading-[48px]"
                type="primary"
              />
            </div>
            <div className="flex flex-wrap w-[1422px] items-center justify-between gap-[10px_10px] px-[72px] py-[10px] relative flex-[0_0_auto]">
              <MainInfo />
              <MainInfo />
              <MainInfo />
            </div>
            <div className="flex flex-col items-center gap-[10px] p-[10px] relative flex-1 self-stretch w-full grow">
              <PhotosAndInfo
                className="!self-stretch !h-[291px] !flex !w-full"
                inverted={false}
                rectangleClassName="!self-stretch !h-[unset] !flex-1 !grow !w-[unset]"
                sampleTextSampleClassName="!self-stretch !flex-1 !w-[unset]"
                text="Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text&nbsp;&nbsp;Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text&nbsp;&nbsp;Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text"
              />
              <PhotosAndInfo
                className="!self-stretch !h-[291px] !flex !w-full"
                inverted
                rectangleClassName="!self-stretch !flex-1 !w-[unset]"
                sampleTextSampleClassName="!self-stretch !h-[unset] !flex-1 !grow !w-[unset]"
                text="Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text&nbsp;&nbsp;Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text&nbsp;&nbsp;Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text"
              />
            </div>
          </div>
          <NavbarsGeneric className="!absolute !left-0 !top-0" Navstyle='about' />
        </div>
      </div>
    </div>
  );
};
