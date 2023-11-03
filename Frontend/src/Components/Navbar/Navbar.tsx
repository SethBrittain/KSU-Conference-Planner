import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";

type NavBarProps = {
  Navstyle: "sessions" | "FAQ" | "home" | "about" | "sign-up";
  className: any;
}

export const NavbarsGeneric = ({ Navstyle, className }: NavBarProps): JSX.Element => {
  return (
    <div className={`w-[1440px] h-[100px] bg-white ${className}`}>
      <div className="h-[100px] bg-white relative">
        <div
          className={`inline-flex absolute ${Navstyle === "sign-up" ? "left-[165px]" : "left-[1221px]"} ${
            Navstyle === "sign-up" ? "items-start" : "items-center"
          } ${Navstyle === "sign-up" ? "top-[38px]" : "top-[29px]"} ${Navstyle === "sign-up" ? "gap-[40px]" : "gap-[22px]"}`}
        >
          {Navstyle === "sign-up" && (
            <>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#637381] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                Home
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#637381] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                Sessions
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#637381] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                About
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#637381] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                FAQ
              </div>
            </>
          )}

          {["FAQ", "about", "home", "sessions"].includes(Navstyle) && (
            <>
              <div className="[font-family:'Inter-Medium',Helvetica] w-fit tracking-[0] text-[16px] text-[#111928] font-medium leading-[24px] whitespace-nowrap relative">
                Sign In
              </div>
              <Button
                buttonText="Sign Up"
                className="!flex-[0_0_auto] !px-[24px] !py-[9px] !bg-[#906397]"
                color="primary"
                kind="primary"
                round="semi-round"
                state="default"
              />
            </>
          )}
        </div>
        {["FAQ", "about", "home", "sessions"].includes(Navstyle) && (
          <div className="left-[165px] inline-flex items-start top-[38px] gap-[40px] absolute">
            <div
              className={`[font-family:'Inter-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] font-medium leading-[24px] whitespace-nowrap relative ${
                Navstyle === "home" ? "text-[#111928]" : "text-[#637381]"
              }`}
            >
              Home
            </div>
            <div
              className={`[font-family:'Inter-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] font-medium leading-[24px] whitespace-nowrap relative ${
                Navstyle === "sessions" ? "text-[#111928]" : "text-[#637381]"
              }`}
            >
              Sessions
            </div>
            <div
              className={`[font-family:'Inter-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] font-medium leading-[24px] whitespace-nowrap relative ${
                Navstyle === "about" ? "text-[#111928]" : "text-[#637381]"
              }`}
            >
              About
            </div>
            <div
              className={`[font-family:'Inter-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] font-medium leading-[24px] whitespace-nowrap relative ${
                Navstyle === "FAQ" ? "text-[#111928]" : "text-[#637381]"
              }`}
            >
              FAQ
            </div>
          </div>
        )}

        <div className="w-[79px] left-[43px] top-[11px] h-[79px] rounded-[39.5px] bg-[#906397] absolute" />
      </div>
    </div>
  );
};

NavbarsGeneric.propTypes = {
  Navstyle: PropTypes.oneOf(["sessions", "FAQ", "home", "about", "sign-up"]),
};
