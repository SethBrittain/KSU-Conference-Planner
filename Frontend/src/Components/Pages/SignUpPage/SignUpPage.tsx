import React from "react";
import { Button } from "../../Button/Button";
import { NavbarsGeneric } from "../../NavbarGeneric/NavbarGeneric";

export const SignUpPage = () => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] overflow-hidden w-[1440px] h-[1024px]">
        <div className="relative w-[1444px] h-[1024px]">
          <div className="w-[1444px] h-[959px] top-[65px] absolute left-0">
            <div className="relative h-[959px]">
              <div className="absolute w-[1444px] h-[959px] top-0 left-0 bg-[#f8f8f8]">
                <div className="relative h-[959px] bg-[#ffffff]">
                  <img className="absolute w-[722px] h-[959px] top-0 left-0" alt="Shapes" src="shapes.png" />
                  <div className="absolute w-[462px] h-[413px] top-[162px] left-[828px]">
                    <div className="top-[305px] absolute w-[455px] h-[107px] left-[4px]">
                      <div className="absolute w-[457px] h-[65px] top-[44px] -left-px bg-[#ffffff] rounded-[5px] border border-solid border-[#e9edf3]" />
                      <div className="absolute top-[12px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#6b747b] text-[15px] tracking-[0] leading-[22px] whitespace-nowrap">
                        Confirm Password
                      </div>
                    </div>
                    <div className="top-[176px] absolute w-[455px] h-[107px] left-[4px]">
                      <div className="absolute w-[457px] h-[65px] top-[44px] -left-px bg-[#ffffff] rounded-[5px] border border-solid border-[#e9edf3]" />
                      <div className="absolute top-[12px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#6b747b] text-[15px] tracking-[0] leading-[22px] whitespace-nowrap">
                        Your Password
                      </div>
                    </div>
                    <div className="absolute w-[460px] h-[158px] top-0 left-0">
                      <div className="top-[51px] absolute w-[455px] h-[107px] left-[4px]">
                        <div className="absolute w-[457px] h-[65px] top-[44px] -left-px bg-[#ffffff] rounded-[5px] border border-solid border-[#e9edf3]" />
                        <div className="absolute top-[12px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#6b747b] text-[15px] tracking-[0] leading-[22px] whitespace-nowrap">
                          Email Address
                        </div>
                      </div>
                      <div className="w-[122px] top-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#212b36] text-[32px] tracking-[0] leading-[normal] absolute left-0">
                        Sign Up
                      </div>
                    </div>
                  </div>
                  <Button
                    className="!left-[822px] !absolute !top-[642px]"
                    color="default"
                    icon="none"
                    size="long"
                    state="default"
                    text="Sign Up"
                    type="primary"
                    textClassName="testing"
                  />
                </div>
              </div>
              <Button
                className="!left-[430px] !absolute !top-[805px]"
                color="white"
                icon="none"
                size="xll"
                state="default"
                text="Sign In"
                type="primary"
                textClassName="testing"
              />
            </div>
          </div>
          <NavbarsGeneric navStyle="logout" className="!absolute !left-0 !top-0" /*headerClassName="!w-[1440px]"*/ />
        </div>
      </div>
    </div>
  );
};
