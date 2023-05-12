const express = require("express")
const router = express.Router()
const VehicleModel = require("../models/vehicle-model")


router.get('/vehicles', async (req, res) => {
    const { type, model, startDate, endDate } = req.query;
    const vehicle = await VehicleModel.find({isAvailable:true});
    if (!vehicle) {
      res.status(404).json({ message: 'No available vehicle found for this type, model, and date range.' });
    } else {
      res.json(vehicle);
    }
  });
  
  module.exports = router