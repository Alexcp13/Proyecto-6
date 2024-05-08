const Car = require("../models/car");






const getCars = async (req, res, next) => {
    try {


        const allCars = await Car.find().populate('brand');

        return res.status(200).json(allCars);

    } catch (error) {
        return res.status(400).json(error);
    }
};

const createCar = async (req, res, next) => {
    try {
        const newCar = new Car(req.body)
        console.log(req)
        const carSaved = await newCar.save()

        return res.status(201).json(carSaved);
    } catch (error) {

        return res.status(400).json(error)
    }
}



const getCarById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const car = await Car.findById(id).populate('brand');

        return res.status(200).json(car);

    } catch (error) {
        return res.status(400).json(error);
    }
};

const updateCar = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newCar = new Car(req.body);

        newCar._id = id;

        const up = await Car.findByIdAndUpdate(id, newCar, { new: true });
        return res.status(200).json(up)



    } catch (error) {
        return res.status(400).json("error")

    }
}


const deleteCar = async (req, res, next) => {

    try {

        const { id } = req.params;
        const carDeleted = await Car.findByIdAndDelete(id);

        return res.status(200).json(carDeleted);

    } catch (error) {
        return res.status(400).json("Error");
    }
}







module.exports = { getCars, getCarById, createCar, updateCar, deleteCar }