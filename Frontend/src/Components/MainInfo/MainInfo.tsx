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
    <Box width='20vw' height='30vh' columnGap={10}>
        <Card>
            <CardMedia
                component = 'img'
                image={ image }
                alt='unslashImage'
                height='20vh'
            />
            <CardContent style={{flex: 'wrap'}}>
                <Typography gutterBottom variant='h6' component='div'>
                    { title }
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions style={{height: '10vh'}}>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
    )
}