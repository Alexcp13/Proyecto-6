const mongoose = require("mongoose");



const brandSchema = new mongoose.Schema(
    {
        symbolImgUrl: { type: String, required: true },
        name: { type: String, required: true },
        country: { type: String, required: true },

    },
    {
        timestamps: true,
        collection: "brands",
    });
const Brand = mongoose.model("brands", brandSchema, "brands");

module.exports = Brand;