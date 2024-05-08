const Brand = require("../models/brand");








const getBrands = async (req, res, next) => {
    try {


        const allBrands = await Brand.find();

        return res.status(200).json(allBrands);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

const createBrand = async (req, res, next) => {
    try {
        console.log(req.body)
        const newBrand = new Brand(req.body)

        const brandSaved = await newBrand.save()

        return res.status(201).json(brandSaved);
    } catch (error) {
        return res.status(400).json("Ha fallado la petición")
    }
}



const getBrandById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const brand = await Brand.findById(id);

        return res.status(200).json(brand);

    } catch (error) {
        return res.status(400).json("Ha fallado la petición");
    }
};

const updateBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newBrand = new Brand(req.body);

        newBrand._id = id;

        const up = await Brand.findByIdAndUpdate(id, newBrand, { new: true });
        return res.status(200).json(up)



    } catch (error) {
        return res.status(400).json("Error")

    }
}


const deleteBrand = async (req, res, next) => {

    try {

        const { id } = req.params;
        const brandDeleted = await Brand.findByIdAndDelete(id);

        return res.status(200).json(brandDeleted);

    } catch (error) {
        return res.status(400).json("Error");
    }
}







module.exports = { getBrands, getBrandById, createBrand, updateBrand, deleteBrand }