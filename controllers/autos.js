import res from "express/lib/response";
import pool from "../db/pg.js"

//Alle Autos aus Auto holen
export const getAllAutos = (req, res) => {
     pool
        .query("select * from Auto")
        .then((data) => res.json({ autos: data.rows}))
        .catch((err) => console.log(err));
};

//Einzelnes Auto aus Auto holen
export const getSingleAuto = (req, res) => {
   const id = req.params.id;
    pool
         .query("select * from Auto WHERE id=$1", [id])
         .then((data) => {
            if(data.rowCount === 0) {
                res.status(404).send("Wir haben bald mehr Autos für Sie!")
            } else {
                res.status(200).json(data.rows[0]);
            }
        })
         .catch((err) => console.log(err));
};

//Zu Auto hinzufügen
export const createAuto = (req, res) => {
    console.log("Contrtoller wird aufgerufen");    
};

//Auto aus Auto Löschen
export const deleteAuto = (req,res) => {
    const id = req.params.id;
    pool.query("DELETE FROM Auto WHERE id=$1", [id])
    .then(data => {
        if(data.rowCount === 0) {
            res.status(404).send("Wir haben bald mehr Autos für Sie!")
        } else {
            res.status(200).send("Auto erfolgreich gelöscht!");
        }
    })
    .catch((err) => res.status(500).json(err));
};

export const updateAuto = (req, res) => {
    console.log("Hier soll ein Auto aktualisiert werden!")
};