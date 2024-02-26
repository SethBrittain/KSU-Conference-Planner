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
            <CardContent style={{flex: 'wrap', paddingTop:'0', maxHeight: '10vh'}}>
                <Typography gutterBottom variant='h6' component='div' fontSize={'1.5rem'}>
                    { title }
                </Typography>
                <Typography variant='body2' color='text.secondary' fontSize={'.9rem'}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions style={{height: '15vh', flexWrap: 'wrap', maxHeight: '10vh', flexGrow: '1'}}>
                <Button size='small'style={{fontSize:'.75rem'}}>Learn More</Button>
                <Button size='small'style={{fontSize:'.75rem'}}>Share</Button>        
            </CardActions>
        </Card>
    </Box>
    )
}