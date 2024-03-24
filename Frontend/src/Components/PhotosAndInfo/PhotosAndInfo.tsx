import React, { useEffect, useState } from "react";
import placeholder from "./31343C.svg";
type PhotosAndInfoProps = {
    image: string;
    text: string;
    spacing: number;
    size: number;
    side: boolean;
}

const PhotosAndInfo = ({ image, text, spacing, size, side }: PhotosAndInfoProps) => {
    const [loaded, setLoaded] = useState(false);

	const isLoaded = () => setLoaded(true);

	return (
		<div className="border border-gray-400 min-h-full flex flex-col">
			<div className="flex align-center justify-center overflow-hidden grow">
				<img style={{content: loaded ? "" : "url('"+placeholder+"')"}} src={image} onLoad={isLoaded} className="min-w-full min-h-full shrink-0"/>
			</div>
			<p className="py-4">
				{text}
			</p>
		</div>
	);
};

export default PhotosAndInfo;