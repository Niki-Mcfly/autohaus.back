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
    const { name, featureimage, description } = req.body;
    pool
        .query(
        "INSERT INTO Auto (name, featureimage, description) VALUES ($1, $2, $3) RETURNING *",
        [name, featureimage, description]
    )
    .then((data) => {
            res.status(201).json(data.rows[0]);
    })
    .catch((err) => console.log(err));
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

//Auto update verändern
export const updateAuto = (req, res) => {
    const id = req.params.id;
    const { name, featureimage, description } = req.body;
    pool
    .query(
    "UPDATE Auto SET name=$1, featureimage=$2, description=$3 WHERE id=$4",
    [name, featureimage, description, id,]
    )
    .then((data) => { 
        if (data.rowCount === 0) {
            res.status(404).send("Auto mit der ID existiert nicht!");
        } else {
        res.status(200).json(data.rows[0]);
    }
})
    .catch((err) => res.status(500).json(err));
};