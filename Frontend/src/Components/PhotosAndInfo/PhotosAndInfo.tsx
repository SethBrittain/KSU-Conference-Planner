import React, { useEffect, useState } from "react";
import placeholder from "./31343C.svg";

/**
 * Information need to create the component
 */
type PhotosAndInfoProps = {
    image: string;
    text: string;
    spacing: number;
    size: number;
    side: boolean;
}
/**
 * Creates the component for photos and info
 * @param PhotosAndInfoProps The information needed to create the component  
 * @returns The component for PhotosAndInfo
 */
const PhotosAndInfo = ({ image, text, spacing, size, side }: PhotosAndInfoProps) => {
    //The state of the image
	const [loaded, setLoaded] = useState(false);
	//Sets loaded to true
	const isLoaded = () => setLoaded(true);

	return (
		<div className="border border-gray-200 flex flex-col shadow-lg h-full">
			<div className="flex align-center justify-center overflow-hidden grow">
				{/*The image of the component */}
				<img style={{content: loaded ? "" : "url('"+placeholder+"')"}} src={image} onLoad={isLoaded} className="min-w-full min-h-full shrink-0"/>
			</div>
			{/*The text part of the component */}
			<p className="py-4 p-2 text-lg">
				{text}
			</p>
		</div>
	);
};

export default PhotosAndInfo;