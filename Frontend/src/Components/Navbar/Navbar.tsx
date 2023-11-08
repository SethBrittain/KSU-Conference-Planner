import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button/Button";

interface Props {
  navStyle: "sessions" | "FAQ" | "home" | "about" | "logout";
  className: any;
}

export const NavbarsGeneric = ({ navStyle, className }: Props): JSX.Element => {
  return (
    <div
      className={`w-[1440px] flex flex-col items-center gap-[10px] h-[100px] justify-center bg-white relative ${className}`}
    >
      <div className="w-full flex self-stretch flex-col items-center grow gap-[10px] flex-1 justify-center relative">
        <div className="w-full self-stretch grow flex-1 bg-white relative" />
        <div className="w-[79px] left-[43px] top-[11px] h-[79px] rounded-[39.5px] bg-[#906397] absolute" />
        {["FAQ", "about", "home", "sessions"].includes(navStyle) && (
          <div className="left-[1242px] inline-flex items-center top-[29px] absolute">
            <Button
              className="!flex-[0_0_auto]"
              color="transparent"
              icon="none"
              size="base"
              state="focus"
              text="Sign In"
              type="primary"
            />
            <Button
              className="!flex-[0_0_auto]"
              color="default"
              icon="none"
              size="base"
              state="default"
              text="Sign Up"
              type="primary"
            />
          </div>
        )}

        <div className="inline-flex left-[135px] items-start top-[31px] gap-[5px] absolute">
          <Button
            className="!flex-[0_0_auto]"
            color="transparent"
            icon="none"
            size="base"
            state="focus"
            text="Home"
            textClassName={navStyle === "home" ? "!text-[#111928]" : "!text-[#637381]"}
            type="primary"
          />
          <Button
            className="!flex-[0_0_auto]"
            color="transparent"
            icon="none"
            size="base"
            state="focus"
            text="Sessions"
            textClassName={navStyle === "sessions" ? "!text-[#111928]" : "!text-[#637381]"}
            type="primary"
          />
          <Button
            className="!flex-[0_0_auto]"
            color="transparent"
            icon="none"
            size="base"
            state="focus"
            text="About"
            textClassName={navStyle === "about" ? "!text-[#111928]" : "!text-[#637381]"}
            type="primary"
          />
          <Button
            className="!flex-[0_0_auto]"
            color="transparent"
            icon="none"
            size="base"
            state="focus"
            text="FAQ"
            textClassName={navStyle === "FAQ" ? "!text-[#111928]" : "!text-[#637381]"}
            type="primary"
          />
        </div>
      </div>
    </div>
  );
};

NavbarsGeneric.propTypes = {
  navStyle: PropTypes.oneOf(["sessions", "FAQ", "home", "about", "logout"]),
};
