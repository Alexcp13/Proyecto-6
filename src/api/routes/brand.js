const { getBrands, getBrandById, createBrand, updateBrand, deleteBrand } = require("../controllers/brand");




const brandRoutes = require("express").Router();

brandRoutes.get("/", getBrands);
brandRoutes.get("/:id", getBrandById);
brandRoutes.post("/", createBrand)
brandRoutes.put("/:id", updateBrand);
brandRoutes.delete("/:id", deleteBrand);

module.exports = brandRoutes;