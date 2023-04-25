import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function MyCard() {
    return (
        <Card
            sx={{
                my:5,
                transition:"0.2s",
                "&:hover": {
                    transform:"scale(1.05)"
                }
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    image="https://via.placeholder.com/1000x200"
                    height="200"
                    title="green iguana"
                    alt="una descripción"
                />
                <CardContent>
                    <Typography variant="h2">Card Title</Typography>
                    <Typography component="p" variant="body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained">Add</Button>
                <Button color="error">Remove</Button>
            </CardActions>
        </Card>
    )
}