import React from "react";
import { Button } from "./Button";
import { MainInfo } from "./MainInfo";
import { NavbarsGeneric } from "./NavbarsGeneric";
import { PhotosAndInfo } from "./PhotosAndInfo";
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
              />
              <Button
                icon="none"
                size="xll"
                state="default"
                text="Join The Event"
                textClassName="button-2"
                type="primary"
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
                rectangleClassName="photos-and-info-2"
                sampleTextSampleClassName="photos-and-info-3"
                text="Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text&nbsp;&nbsp;Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text&nbsp;&nbsp;Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text"
              />
              <PhotosAndInfo
                className="photos-and-info-instance"
                inverted
                rectangleClassName="photos-and-info-3"
                sampleTextSampleClassName="photos-and-info-2"
                text="Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text&nbsp;&nbsp;Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text&nbsp;&nbsp;Sample text Sample text Sample text Sample text Sample text Sample text&nbsp;&nbsp;text Sample text Sample text Sample text"
              />
            </div>
          </div>
          <NavbarsGeneric className="navbars-generic-instance" headerClassName="navbars-generic-2" style="home" />
        </div>
      </div>
    </div>
  );
};
