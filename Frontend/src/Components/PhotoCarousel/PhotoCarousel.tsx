import React from "react";
import Carousel from "react-material-ui-carousel";
import { PhotoCarouselItem } from "./PhotoCarouselItem";
import slider from "./Helpers/slider.json"

export const PhotoCarousel = () => {
    return (
        <Carousel>
            {
                slider.map( item => <PhotoCarouselItem key={item.id} item={item}/>)
            }
        </Carousel>
    )
}