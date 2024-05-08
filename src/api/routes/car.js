const { getCars, getCarById, updateCar, deleteCar, createCar } = require("../controllers/car");




const carRoutes = require("express").Router();
carRoutes.get("/", getCars);
carRoutes.get("/:id", getCarById);
carRoutes.post("/", createCar)
carRoutes.put("/:id", updateCar);
carRoutes.delete("/:id", deleteCar);

module.exports = carRoutes;