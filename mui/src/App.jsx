import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AdbIcon from '@mui/icons-material/Adb';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Product from "./components/Product";
import MyCard from "./components/MyCard";
import MyNavBar from "./components/navbar/MyNavBar";

export default function App() {
  return (
    <Container maxWidth="md">
      <MyNavBar />
      <h1>App</h1>
      <Typography
        variant="h3"
        component="h2"
        textAlign="center"
        color=" "
        my={5}
        sx={{ border: 2, boxShadow: 2, pb: 2 }}
      >
        Este es un título con componentes
      </Typography>
      <Box
        sx={{
          border: 2,
          p: 5,
          borderColor: "peru",
          bgcolor: "#111",
          color: "white",
          mb: 3,
        }}
      >
        Box con MUI
      </Box>
      <Button variant="contained" color="primary" sx={{ color: 'white' }} startIcon={<AccountBoxIcon />}>Primer Button</Button>
      <Button variant="outlined" color="primary" sx={{ ml:3 }} endIcon={< AdbIcon />}>Segundo Button</Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </Grid>
      </Grid>
      <Product/>
      <MyCard />
    </Container>
  )
}
