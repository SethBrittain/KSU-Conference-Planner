import PropTypes from "prop-types";
import React from "react";

interface Props {
  type: "primary";
  size: "xl" | "xs" | "l" | "sm" | "base";
  icon: "arrow" | "none";
  state: "default" | "hover" | "focus";
  className: any;
}

export const Button = ({ type, size, icon, state, className }: Props): JSX.Element => {
  return (
    <button
      className={`items-center overflow-hidden rounded-[12px] justify-center relative all-[unset] box-border ${
        state === "focus" && ["base", "l", "xl"].includes(size)
          ? "border-[3px] border-solid"
          : state === "focus" && ["sm", "xs"].includes(size)
          ? "border-2 border-solid"
          : ""
      } ${state === "focus" ? "border-[#a16fa8]" : ""} ${icon === "arrow" ? "w-[118px]" : ""} ${
        icon === "arrow" ? "flex" : "inline-flex"
      } ${
        size === "xl"
          ? "px-[25px] py-[13px]"
          : size === "sm"
          ? "px-[13px] py-[9px]"
          : size === "xs"
          ? "px-[11px] py-[7px]"
          : "px-[17px] py-[9px]"
      } ${icon === "arrow" ? "h-[52px]" : ""} ${state === "hover" ? "bg-[#1a56db]" : "bg-[#906397]"} ${className}`}
    >
      {icon === "none" && (
        <div
          className={`[font-family:'Inter-SemiBold',Helvetica] w-fit tracking-[0] text-white relative font-semibold whitespace-nowrap ${
            ["default", "hover"].includes(state) ? "mt-[-1.00px]" : ""
          } ${["base", "sm"].includes(size) ? "text-[14px]" : size === "xs" ? "text-[12px]" : "text-[16px]"} ${
            ["base", "sm"].includes(size) ? "leading-[21px]" : size === "xs" ? "leading-[18px]" : "leading-[24px]"
          }`}
        >
          Button text
        </div>
      )}

      {icon === "arrow" && <img className="relative w-[51.01px] h-[17.32px]" alt="Arrow" src="arrow-2.svg" />}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["xl", "xs", "l", "sm", "base"]),
  icon: PropTypes.oneOf(["arrow", "none"]),
  state: PropTypes.oneOf(["default", "hover", "focus"]),
};
