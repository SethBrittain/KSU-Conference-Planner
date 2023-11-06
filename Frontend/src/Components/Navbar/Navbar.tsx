import PropTypes from "prop-types";
import React from "react";
import { Button } from "./Button";
import "./style.css";

export const NavbarsGeneric = ({ navStyle, className }) => {
  return (
    <div className={`navbars-generic ${className}`}>
      <div className="header">
        <div className={`menu-items ${navStyle}`}>
          {navStyle === "sign-up" && (
            <>
              <div className="text-wrapper">Home</div>
              <div className="text-wrapper">Sessions</div>
              <div className="text-wrapper">About</div>
              <div className="text-wrapper">FAQ</div>
            </>
          )}

          {["FAQ", "about", "home", "sessions"].includes(navStyle) && (
            <>
              <div className="login">Sign In</div>
              <Button
                className="button-instance"
                icon="none"
                size="base"
                state="default"
                text="Sign Up"
                type="primary"
              />
            </>
          )}
        </div>
        {["FAQ", "about", "home", "sessions"].includes(navStyle) && (
          <div className="div">
            <div className={`text-wrapper-2 nav-style-${navStyle}`}>Home</div>
            <div className={`text-wrapper-3 nav-style-0-${navStyle}`}>Sessions</div>
            <div className={`text-wrapper-4 nav-style-1-${navStyle}`}>About</div>
            <div className={`text-wrapper-5 nav-style-2-${navStyle}`}>FAQ</div>
          </div>
        )}

        <div className="ellipse" />
      </div>
    </div>
  );
};

NavbarsGeneric.propTypes = {
  navStyle: PropTypes.oneOf(["sessions", "FAQ", "home", "about", "sign-up"]),
};
