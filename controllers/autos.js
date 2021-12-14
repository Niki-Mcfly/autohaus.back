import pool from "../db/pg.js"

export const getAllAutos = (req, res) => {
     pool
        .query("select * from Auto")
        .then((data) => res.json({ autos: data.rows}))
        .catch((err) => console.log(err));
};

export const getSingleAuto = (req, res) => {
   const id = req.params.id;
    pool
         .query("select * from Auto WHERE id=$1", [id])
         .then((data) => res.json(data.rows[0]))
         .catch((err) => console.log(err));
};