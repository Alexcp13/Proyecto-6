const mongoose = require("mongoose");


const conectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("BBDD en marcha")

    } catch (error) {
        console.log("Error conectando con la bbdd")

    }

}


module.exports = { conectDB };