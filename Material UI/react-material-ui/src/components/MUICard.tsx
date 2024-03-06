import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"

function MUICard() {
  return (
    <Box width='300px'>
        {/* Dalam card bisa ada media, content, dan actions yg bisa dilakukan
        , biasanya dalam bentuk button */}
        <Card>
            <CardMedia component='img' height='140px' image="https://source.unsplash.com/random"></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component='div'>React</Typography>
                <Typography gutterBottom variant="body2" color='text.secondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati fugiat harum suscipit reiciendis soluta quibusdam voluptas possimus numquam. Dignissimos optio nostrum molestias, dolore aliquam nam ex temporibus consectetur non.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MUICard