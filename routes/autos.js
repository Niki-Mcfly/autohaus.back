import express from "express";
import { createAuto, deleteAuto, getAllAutos, getSingleAuto, updateAuto } from "../controllers/autos.js"
const autos = express.Router();

//Um alle Autos zu bekommen 
autos.route("/").get(getAllAutos)

//Um ein Auto hinzuzufügen
autos.route("/").post(createAuto)

//Um ein einzelnes Auto zu bekommen 
autos.route("/:id").get(getSingleAuto)

//Um ein Auto zu Löschen
autos.route("/:id").delete(deleteAuto)

//Um ein Auto zu Updaten
autos.route("/:id").put(updateAuto)
export default autos;