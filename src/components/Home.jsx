import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Homepage from "../Assets/Homepage.png"

const Home = () => {
    return (
        <div>
        <Box>
            <Typography style = {{ textAlign: "center" }} variant = "h2" > Welcome! </Typography> 
            < Typography style = {{ textAlign: "center" }} variant = "h5" > CRUD </Typography> 
            <img src = { Homepage } style = {{ width: "30%", margin: "5px 0 0 35%" }} /> 
            <Typography style = {{ textAlign: "center" }} variant = "h5" > Home Page </Typography> 
        </Box>
        </div>
    );
};

export default Home;
