import { Box,
        Card,
        CardContent,
        Typography,
        CardActions,
        Button,
        CardMedia } from "@mui/material"

type MainInfoProps = {
    image: string;
    title: string;
    description: string;
}

export const MainInfo = ({ image, title, description }: MainInfoProps) => {
    return ( 
    <Box width='15vw'>
        <Card>
            <CardMedia
                component = 'img'
                height = '10vh'
                image={ image }
                alt='unslashImage'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    { title }
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    { description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
    )
}