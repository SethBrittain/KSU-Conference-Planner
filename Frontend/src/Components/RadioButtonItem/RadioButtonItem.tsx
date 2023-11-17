import PropTypes from "prop-types";
import React from "react";

interface Props {
  state: "off" | "on";
  className: any;
  text: any;
}

export const RadioButtonItem = ({ state, className }: Props): JSX.Element => {
  return (
    <div className={`w-[225px] h-[49px] bg-white relative ${className}`}>
      <div
        className={`absolute ${state === "on" ? "[font-family:'Inter-Medium',Helvetica]" : ""} ${
          state === "off" ? "border border-solid" : ""
        } ${state === "off" ? "border-[#906397]" : ""} ${state === "off" ? "w-[26px]" : ""} ${
          state === "on" ? "left-[54px]" : "left-[12px]"
        } ${state === "on" ? "tracking-[0]" : ""} ${state === "on" ? "text-[12px]" : ""} ${
          state === "on" ? "top-[16px]" : "top-[11px]"
        } ${state === "on" ? "text-black" : ""} ${state === "off" ? "h-[26px]" : ""} ${
          state === "on" ? "font-medium" : ""
        } ${state === "on" ? "leading-[normal]" : ""} ${state === "off" ? "rounded-[13px]" : ""}`}
      >
        {state === "on" && <>Radio button</>}
      </div>
      <div
        className={`absolute ${state === "on" ? "border-[#906397]" : ""} ${
          state === "on" ? "top-[10px]" : "top-[16px]"
        } ${state === "off" ? "text-black" : ""} ${state === "off" ? "leading-[normal]" : ""} ${
          state === "off" ? "[font-family:'Inter-Medium',Helvetica]" : ""
        } ${state === "on" ? "w-[26px]" : ""} ${state === "on" ? "bg-[url(ellipse-1.svg)]" : ""} ${
          state === "off" ? "font-medium" : ""
        } ${state === "on" ? "rounded-[13px]" : ""} ${state === "off" ? "text-[12px]" : ""} ${
          state === "on" ? "bg-[100%_100%]" : ""
        } ${state === "on" ? "border border-solid" : ""} ${state === "on" ? "left-[11px]" : "left-[54px]"} ${
          state === "off" ? "tracking-[0]" : ""
        } ${state === "on" ? "h-[26px]" : ""}`}
      >
        {state === "off" && <>Radio button</>}
      </div>
    </div>
  );
};

RadioButtonItem.propTypes = {
  state: PropTypes.oneOf(["off", "on"]),
};
