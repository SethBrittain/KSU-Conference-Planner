import PropTypes from "prop-types";
import React from "react";

interface Props {
  inverted: boolean;
  className: any;
}

export const PhotosAndInfo = ({ inverted, className }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-[20px] p-[10px] relative ${className}`}>
      <div
        className={`relative ${inverted ? "[font-family:'Inter-Regular',Helvetica]" : ""} ${
          inverted ? "w-fit" : "w-[443px]"
        } ${inverted ? "mt-[-1.00px]" : ""} ${inverted ? "tracking-[0]" : ""} ${inverted ? "text-[24px]" : ""} ${
          inverted ? "text-black" : ""
        } ${!inverted ? "h-[124px]" : ""} ${inverted ? "font-normal" : ""} ${inverted ? "text-center" : ""} ${
          !inverted ? "bg-[#d9d9d9]" : ""
        } ${inverted ? "leading-[normal]" : ""}`}
      >
        {inverted && (
          <p>
            Sample text Sample text <br />
            Sample text Sample text
            <br />
            Sample text Sample text <br />
            Sample text Sample text <br />
            Sample text Sample text
          </p>
        )}
      </div>
      <div
        className={`relative ${!inverted ? "[font-family:'Inter-Regular',Helvetica]" : ""} ${
          inverted ? "w-[443px]" : "w-fit"
        } ${!inverted ? "mt-[-1.00px]" : ""} ${!inverted ? "tracking-[0]" : ""} ${!inverted ? "text-[24px]" : ""} ${
          !inverted ? "text-black" : ""
        } ${inverted ? "h-[124px]" : ""} ${!inverted ? "font-normal" : ""} ${!inverted ? "text-center" : ""} ${
          inverted ? "bg-[#d9d9d9]" : ""
        } ${!inverted ? "leading-[normal]" : ""}`}
      >
        {!inverted && (
          <p>
            Sample text Sample text <br />
            Sample text Sample text
            <br />
            Sample text Sample text <br />
            Sample text Sample text <br />
            Sample text Sample text
          </p>
        )}
      </div>
    </div>
  );
};

PhotosAndInfo.propTypes = {
  inverted: PropTypes.bool,
};
