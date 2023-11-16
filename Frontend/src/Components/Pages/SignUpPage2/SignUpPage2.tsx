import React from "react";
import { Button } from "../../Button/Button";
import { Checkbox } from "./Checkbox";
import { NavbarsGeneric } from "../../NavbarGeneric/Navbar";
import { RadioButtonItem } from "../../RadioButtonItem/RadioButtonItem";

export const SignUpPage2 = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] flex flex-row justify-center w-full">
      <div className="bg-[#ffffff] overflow-hidden w-[1440px] h-[1026px]">
        <div className="relative w-[1444px] h-[1024px]">
          <div className="w-[1444px] h-[959px] top-[65px] absolute left-0">
            <div className="h-[959px] bg-[#f8f8f8]">
              <div className="relative w-[1444px] h-[959px] bg-[#ffffff]">
                <img className="absolute w-[722px] h-[959px] top-0 left-0" alt="Side bar" src="side-bar.png" />
                <div className="absolute w-[455px] h-[224px] top-[89px] left-[776px]">
                  <div className="w-[455px] h-[122px] top-0 absolute left-0">
                    <div className="absolute w-[457px] h-[73px] top-[49px] -left-px bg-[#ffffff] rounded-[5px] border border-solid border-[#e9edf3]" />
                    <div className="absolute w-[122px] h-[73px] top-[-32px] left-0">
                      <p className="top-[51px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[15px] tracking-[0] leading-[22px] whitespace-nowrap absolute left-0">
                        <span className="text-[#6b747b]">First Name </span>
                        <span className="text-[#ff4141]">*</span>
                      </p>
                      <div className="w-[122px] top-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#212b36] text-[32px] tracking-[0] leading-[normal] absolute left-0">
                        Sign Up
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[455px] h-[122px] top-[102px] left-0">
                    <div className="absolute w-[457px] h-[73px] top-[49px] -left-px bg-[#ffffff] rounded-[5px] border border-solid border-[#e9edf3]" />
                    <p className="absolute top-[19px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[15px] tracking-[0] leading-[22px] whitespace-nowrap">
                      <span className="text-[#6b747b]">Last Name</span>
                      <span className="text-[#abb5be]">&nbsp;</span>
                      <span className="text-[#ff4141]">*</span>
                    </p>
                  </div>
                </div>
                <div className="absolute w-[455px] h-[122px] top-[322px] left-[779px]">
                  <p className="absolute top-[19px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[15px] tracking-[0] leading-[22px] whitespace-nowrap">
                    <span className="text-[#6b747b]">Attendee Type</span>
                    <span className="text-[#abb5be]">&nbsp;</span>
                    <span className="text-[#ff4141]">*</span>
                  </p>
                  <div className="absolute w-[225px] h-[49px] top-[42px] left-[-9px] bg-[#ffffff]">
                    <div className="absolute top-[16px] left-[54px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#000000] text-[12px] tracking-[0] leading-[normal]">
                      K-State Undergrad Student
                    </div>
                    <div className="absolute w-[26px] h-[26px] top-[11px] left-[12px] rounded-[13px] border border-solid border-[#906397]" />
                  </div>
                  <RadioButtonItem
                    className="!absolute !left-[-9px] !top-[91px]"
                    state="off"
                    text="K-State Graduate Student"
                  />
                  <RadioButtonItem className="!absolute !left-[-9px] !top-[140px]" state="off" text="K-State Alumni" />
                  <RadioButtonItem className="!absolute !left-[216px] !top-[42px]" state="off" text="K-State Faculty" />
                  <RadioButtonItem
                    className="!absolute !left-[216px] !top-[91px]"
                    state="off"
                    text="High School Teacher"
                  />
                </div>
                <div className="absolute w-[504px] h-[210px] top-[519px] left-[747px]">
                  <div className="absolute w-[455px] h-[122px] top-[88px] left-[23px]">
                    <p className="absolute top-[19px] left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[15px] tracking-[0] leading-[22px] whitespace-nowrap">
                      <span className="text-[#6b747b]">Interest In Presenting</span>
                      <span className="text-[#abb5be]">&nbsp;</span>
                      <span className="text-[#ff4141]">*</span>
                    </p>
                    <div className="absolute w-[225px] h-[49px] top-[42px] left-[-9px] bg-[#ffffff]">
                      <div className="absolute top-[16px] left-[54px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#000000] text-[12px] tracking-[0] leading-[normal]">
                        Interested
                      </div>
                      <div className="absolute w-[26px] h-[26px] top-[11px] left-[12px] rounded-[13px] border border-solid border-[#906397]" />
                    </div>
                    <div className="absolute w-[225px] h-[49px] top-[41px] left-[228px] bg-[#ffffff]">
                      <div className="absolute top-[16px] left-[54px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#000000] text-[12px] tracking-[0] leading-[normal]">
                        Not Interested
                      </div>
                      <div className="absolute w-[26px] h-[26px] top-[11px] left-[12px] rounded-[13px] border border-solid border-[#906397]" />
                    </div>
                  </div>
                  <div className="absolute w-[504px] h-[108px] top-0 left-0">
                    <Checkbox
                      basesCheckboxBasesIconWrapperColor="color-3.svg"
                      basesCheckboxBasesIconWrapperColorClassName="!h-px !left-[-6289px] !w-px !top-[348px]"
                      className="!absolute !left-[29px] !w-[180px] !top-[48px]"
                      label
                      labelClassName="!text-[#000000]"
                      selected={false}
                      stateProp="default"
                      text="Reviewer"
                    />
                    <Checkbox
                      basesCheckboxBasesIconWrapperColor="color-4.svg"
                      basesCheckboxBasesIconWrapperColorClassName="!h-px !left-[-6517px] !w-px !top-[345px]"
                      className="!absolute !left-[257px] !w-[180px] !top-[51px]"
                      label
                      labelClassName="!text-[#000000]"
                      selected={false}
                      stateProp="default"
                      text="Scheduler"
                    />
                    <div className="absolute top-[16px] left-[32px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#6b747b] text-[15px] tracking-[0] leading-[22px] whitespace-nowrap">
                      Request Status
                    </div>
                  </div>
                </div>
                <Button
                  className="!absolute !left-[774px] !top-[777px]"
                  color="default"
                  icon="none"
                  size="long"
                  state="default"
                  text="Next"
                  type="primary"
                />
              </div>
            </div>
          </div>
          <NavbarsGeneric navStyle = "logout" className="!absolute !left-0 !top-0" /*headerClassName="!w-[1440px]"*/ />
        </div>
      </div>
    </div>
  );
};
