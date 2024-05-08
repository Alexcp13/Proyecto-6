const mongoose = require("mongoose");



const carSchema = new mongoose.Schema(
    {
        km: { type: Number, required: true },
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'brands'
        },
        model: { type: String, required: true },
        price: { type: Number, required: true },
        age: { type: Number, required: true }
    },
    {
        timestamps: true,
        collection: "cars",
    });
const Car = mongoose.model("cars", carSchema, "cars");

module.exports = Car;