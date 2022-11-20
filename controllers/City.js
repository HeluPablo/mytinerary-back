const City = require("../models/City");

const cityController = {
    createCity: async (req, res) => {
        try {
            let newCity = await City.create(req.body);
            res.status(201).json({
                response: newCity,
                success: true,
                message: "City created",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
}
    module.exports = cityController;
