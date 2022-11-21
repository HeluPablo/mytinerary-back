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
    readAll: async (req, res) => {
        let query = {};
        if (req.query.continent) {
            query = { continent: req.query.continent };
        }
        if (req.query.name) {
            query = {...query, name: { $regex: req.query.name, $options: "i" },
            };
        }
        try {
            let city = await City.find(query);
            res.status(200).json({
                response: city,
                success: true,
                message: "Cities found successfully",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    readOne: async (req, res) => {
        let id = req.params.id;  ///Id pasado por parametros. 
        try {
            let city = await City.findOne({ _id: id })   ////Busqueda que realiza en MongoDB (Comparación)
            .populate({  
                path: "userId",
                select: "name photo -_id",
            });
            if (city) {
                res.status(200).json({
                    response: city,
                    success: true,
                    message: "City found successfully",
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: error.message,
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
    update: async (req, res) => {
        let id = req.params.id;
        try {
            let city = await City.findOneAndUpdate({ _id: id }, req.body, {new: true} )
            
            if (city) {
                res.status(200).json({
                    response: city,
                    success: true,
                    message: "City update successfully",
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: error.message,
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    },
}
    module.exports = cityController;
