import React from "react";

type PhotosAndInfoProps = {
    text: string;
}
const PhotosAndInfo = ({ text }: PhotosAndInfoProps): React.JSX.Element => <button>{ text }</button>;

export default PhotosAndInfo;