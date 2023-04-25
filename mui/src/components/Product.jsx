import styled from "@emotion/styled";
import { Button, Paper, Typography, Box } from "@mui/material";

export default function Product() {

    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    })

    return (
        <Paper
            sx={{
                display:"flex",
                alignItems:"center",
                gap: 2,
                overflow: "hidden",
                my:5
            }}
        >
            <Img 
                src="https://via.placeholder.com/200"
                alt="Mi hermosa imagen con Styled"
            />
            <Box sx={{ flexGrow: 1, display: "grid", gap: 4 }}>
                <Typography variant="h4" component="h3">Product Name</Typography>
                <Typography variant="body1">Product Description</Typography>
                <Button variant="contained">Add Card</Button>
            </Box>
            <Box sx={{ mr:2 }} component="p">$19.99</Box>
        </Paper>
    )
}