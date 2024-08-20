import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import TourCard from "../components/TourCard";
import "../index.css";
import cities from "../data.json";

const Home = () => {
  return (
    <>
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name}
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, key) => (
                <TourCard tour={tour} key={key} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  );
};

export default Home;
