require("dotenv").config()
const express = require("express");
const brandRoutes = require("./src/api/routes/brand");
const carRoutes = require("./src/api/routes/car");
const { conectDB } = require("./src/config/db");




const app = express();

app.use(express.json());


conectDB();

app.use("/api/cars", carRoutes);

app.use("/api/brands", brandRoutes);



app.use("*", (req, rest, next) => {
    return rest.status(484).json("Ruote not found");
})



app.listen(3000, () => {
    console.log("servidor desplegado en http://localhost:3000")
})