import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  Avatar,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const HeroContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: "auto",
  width: theme.spacing(15),
  height: theme.spacing(15),
}));

const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
}));

function App() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Lucas Martin Duran
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <HeroContent>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Mi Portafolio
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
          </Container>
        </HeroContent>
        <CardGrid maxWidth="md">
          <Grid container spacing={4}>
            <Grid item key="about" xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <AvatarStyled alt="Mi foto" src="/images/avatar.jpg" />
                <Box p={2}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sobre mi
                  </Typography>
                  <Typography>
                    Soy un desarrollador con experiencia en React, Node.js,
                    Javascript y más.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item key="project1" xs={12} sm={6} md={4}>
              <Paper
                sx={{ display: "flex", flexDirection: "column", padding: 2 }}
              >
                <Box p={2}>
                  <Typography gutterBottom variant="h5" component="h2">
                    AniView
                  </Typography>
                  <Typography>
                    Es un projecto de una aplicacion para PC de visualizacion de
                    contenido de repositorios externos.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item key="project2" xs={12} sm={6} md={4}>
              <Paper
                sx={{ display: "flex", flexDirection: "column", padding: 2 }}
              >
                <Box p={2}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Recoleccion de informacion
                  </Typography>
                  <Typography>
                    Es un projecto para una app web sobre recoleccion de datos
                    para diferentes campos de trabajo.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </CardGrid>
      </main>
      <Footer>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Informacion de Contacto
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          ></Typography>
          <Box mt={4} align="center">
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/Sempi18"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              color="primary"
              href="https://www.linkedin.com/in/lucas-duran-1a8267314/"
              target="_blank"
              sx={{ ml: 2 }}
            >
              LinkedIn
            </Button>
          </Box>
        </Container>
      </Footer>
    </>
  );
}

export default App;
