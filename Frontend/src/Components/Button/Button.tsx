import PropTypes from "prop-types";
import React from "react";

interface Props {
  type: "primary";
  size: "sm" | "xll" | "cancle" | "xs" | "l" | "long" | "xl" | "base";
  icon: "arrow" | "none";
  state: "default" | "hover" | "focus";
  color: "white" | "red" | "transparent" | "default";
  text: any;
  className: any;
  textClassName: any;
}

export const Button = ({ type, size, icon, state, color, className, textClassName }: Props): JSX.Element => {
  return (
    <div
      className={`items-center overflow-hidden rounded-[12px] justify-center relative ${
        (color === "default" && size === "base" && state === "focus") ||
        (size === "l" && state === "focus") ||
        (size === "xl" && state === "focus")
          ? "border-[3px] border-solid"
          : state === "focus" && (color === "white" || size === "sm" || size === "xs")
          ? "border-2 border-solid"
          : ""
      } ${
        color === "default" && state === "focus"
          ? "border-[#a16fa8]"
          : color === "white" && state === "focus"
          ? "border-white"
          : ""
      } ${
        icon === "arrow"
          ? "w-[118px]"
          : size === "cancle"
          ? "w-[233px]"
          : size === "xll"
          ? "w-[238px]"
          : size === "long"
          ? "w-[465px]"
          : color === "white" && state === "focus"
          ? "w-[106px]"
          : ""
      } ${
        (color === "default" && size === "base") ||
        color === "transparent" ||
        (icon === "none" && size === "xl") ||
        size === "l" ||
        size === "sm" ||
        size === "xs"
          ? "inline-flex"
          : size === "cancle" ||
            size === "long" ||
            size === "xll" ||
            icon === "arrow" ||
            (color === "white" && size === "base")
          ? "flex"
          : ""
      } ${
        ["cancle", "long", "xl", "xll"].includes(size)
          ? "px-[25px] py-[13px]"
          : size === "l" || (color === "default" && size === "base")
          ? "px-[17px] py-[9px]"
          : size === "sm"
          ? "px-[13px] py-[9px]"
          : color === "transparent" || size === "xs" || (color === "white" && size === "base")
          ? "px-[11px] py-[7px]"
          : ""
      } ${
        icon === "arrow"
          ? "h-[52px]"
          : size === "cancle"
          ? "h-[67px]"
          : size === "xll"
          ? "h-[91px]"
          : size === "long"
          ? "h-[65px]"
          : color === "white" && state === "focus"
          ? "h-[43px]"
          : ""
      } ${
        color === "default" && ["default", "focus"].includes(state)
          ? "bg-[#906397]"
          : state === "hover"
          ? "bg-[#1a56db]"
          : color === "red"
          ? "bg-[#ff4141]"
          : color === "white"
          ? "bg-white"
          : ""
      } ${className}`}
    >
      {icon === "none" && (
        <div
          className={`tracking-[0] relative ${
            (color === "default" && size === "base") ||
            size === "cancle" ||
            size === "l" ||
            size === "long" ||
            size === "sm" ||
            size === "xl" ||
            size === "xll" ||
            size === "xs"
              ? "[font-family:'Inter-SemiBold',Helvetica]"
              : color === "transparent" || (color === "white" && size === "base")
              ? "[font-family:'Inter-Medium',Helvetica]"
              : ""
          } ${["long", "xll"].includes(size) ? "w-[246px]" : "w-fit"} ${
            ["long", "xll"].includes(size) ? "self-stretch" : ""
          } ${
            (size === "base" && state === "default") ||
            (size === "l" && state === "default") ||
            size === "long" ||
            (size === "sm" && state === "default") ||
            (size === "xl" && state === "default") ||
            size === "xll" ||
            (size === "xs" && state === "default") ||
            state === "hover"
              ? "mt-[-1.00px]"
              : ""
          } ${
            color === "transparent" || size === "l" || size === "xl" || (color === "white" && size === "base")
              ? "text-[16px]"
              : size === "cancle"
              ? "text-[24px]"
              : ["long", "xll"].includes(size)
              ? "text-[20px]"
              : size === "sm" || (color === "default" && size === "base")
              ? "text-[14px]"
              : size === "xs"
              ? "text-[12px]"
              : ""
          } ${size === "xll" ? "mr-[-25.00px]" : ""} ${
            ["default", "red"].includes(color)
              ? "text-white"
              : color === "white" && size === "xll"
              ? "text-[#5a0b67]"
              : color === "transparent" || (color === "white" && size === "base")
              ? "text-black"
              : ""
          } ${size === "xll" ? "ml-[-29.00px]" : ""} ${
            (color === "default" && size === "base") ||
            size === "cancle" ||
            size === "l" ||
            size === "long" ||
            size === "sm" ||
            size === "xl" ||
            size === "xll" ||
            size === "xs"
              ? "font-semibold"
              : color === "transparent" || (color === "white" && size === "base")
              ? "font-medium"
              : ""
          } ${["long", "xll"].includes(size) ? "text-center" : ""} ${
            ["base", "cancle", "l", "sm", "xl", "xs"].includes(size) ? "whitespace-nowrap" : ""
          } ${
            color === "transparent" || size === "l" || size === "xl" || (color === "white" && size === "base")
              ? "leading-[24px]"
              : size === "cancle"
              ? "leading-[36px]"
              : ["long", "xll"].includes(size)
              ? "leading-[30px]"
              : size === "sm" || (color === "default" && size === "base")
              ? "leading-[21px]"
              : size === "xs"
              ? "leading-[18px]"
              : ""
          } ${textClassName}`}
        >
          {((color === "default" && size === "base") ||
            size === "cancle" ||
            size === "l" ||
            size === "long" ||
            size === "sm" ||
            size === "xl" ||
            size === "xll" ||
            size === "xs") && <>Button textnpm </>}

          {(color === "transparent" || (color === "white" && size === "base")) && <>Sign In</>}
        </div>
      )}

      {icon === "arrow" && <img className="relative w-[51.01px] h-[17.32px]" alt="Arrow" src="arrow-2.svg" />}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary"]),
  size: PropTypes.oneOf(["sm", "xll", "cancle", "xs", "l", "long", "xl", "base"]),
  icon: PropTypes.oneOf(["arrow", "none"]),
  state: PropTypes.oneOf(["default", "hover", "focus"]),
  color: PropTypes.oneOf(["white", "red", "transparent", "default"]),
};
