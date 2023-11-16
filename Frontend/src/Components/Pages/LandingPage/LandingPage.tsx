import React from "react";
import { Button } from "../../Button/Button";
import { MainInfo } from "../../MainInfo/MainInfo";
import { NavbarsGeneric } from "../../NavbarGeneric/Navbar";
import { PhotosAndInfo } from "../../PhotosAndInfo/PhotosAndInfo";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-2">
        <div className="rectangle-2" />
        <div className="overlap-group">
          <div className="frame-3">
            <div className="frame-4">
              <Button
                icon="none"
                size="xll"
                state="default"
                text="Current Sessions"
                textClassName="design-component-instance-node"
                type="primary"
                color="default"
                className="test"
              />
              <Button
                icon="none"
                size="xll"
                state="default"
                text="Join The Event"
                textClassName="button-2"
                type="primary"
                color="default"
                className="test"
              />
            </div>
            <div className="frame-5">
              <MainInfo />
              <MainInfo />
              <MainInfo />
            </div>
            <div className="frame-6">
              <PhotosAndInfo
                className="photos-and-info-instance"
                inverted={false}
                />
              <PhotosAndInfo
                className="photos-and-info-instance"
                inverted
               />
            </div>
          </div>
          <NavbarsGeneric className="navbars-generic-instance"  navStyle="home" />
        </div>
      </div>
    </div>
  );
};
