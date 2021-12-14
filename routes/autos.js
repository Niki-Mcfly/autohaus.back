import express from "express";
const autos = express.Router();

//Um alle Autos zu bekommen 
autos.route("/autos")

//Um ein einzelnes Auto zu bekommen
autos.route("/autos/:id")

export default autos;