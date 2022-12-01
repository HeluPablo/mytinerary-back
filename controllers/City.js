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
    //// Filtro para continente y nombre
    let query = {};
    /// Si le paso un continente, entonces, que lo coloque en query
    if (req.query.continent) {
      query = { continent: req.query.continent };
    }
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    /// Si le paso un nombre, entonces, que lo coloque en query
    if (req.query.name) {
      query = { ...query, name: { $regex: req.query.name, $options: "i" } };
    }
    try {
      let city = await City.find(query); ///Buscará según la query
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
    let id = req.params.id; ///Id pasado por parametros.
    try {
        console.log(id)
      let city = await City.findOne({ _id: id }) ////Busqueda que realiza en MongoDB (Comparación)
        .populate({
          path: "userId",
          select: "name photo _id",
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


    console.log(req.params);


    let id = req.params.id; /// Parametro pasado por id
    try {
      let city = await City.findOneAndUpdate({ _id: id }, req.body, {new: true}); 
                                            /// Buscar por parametro, y actualizar al nuevo cuerpo

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
  destroy: async (req, res) => {
    let id = req.params.id;
    try {
      let city = await City.findOneAndDelete({ _id: id });

      if (city) {
        res.status(200).json({
          response: city,
          success: true,
          message: "City deleted successfully",
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
};
module.exports = cityController;
