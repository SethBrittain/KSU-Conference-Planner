import { Paper, Button } from '@mui/material'
import { Item } from 'PhotoCarousel.types'

type PhotoCarouselItemProps = {
    item: Item
}

export const PhotoCarouselItem = ({ item }: PhotoCarouselItemProps) => {
    return (
        <Paper>
            <img src={item.image} alt={item.title}/>
            <h2> {item.title} </h2>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}