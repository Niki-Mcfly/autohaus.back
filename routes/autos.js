import express from "express";
import { getAllAutos, getSingleAuto } from "../controllers/autos.js"
const autos = express.Router();

//Um alle Autos zu bekommen 
autos.route("/").get(getAllAutos)

//Um ein einzelnes Auto zu bekommen 
autos.route("/:id").get(getSingleAuto)

export default autos;