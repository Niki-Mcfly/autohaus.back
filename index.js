import "dotenv/config.js";
import express from "express";
import autos from "./routes/autos.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use("/autos", autos);

app.get("/", (req, res) =>
    res.send(
        "<h1>Jetzt endlich mit echten Daten aus einer Postgresql Datenbank!!</h1>"
     )
);

app.listen(port, () => console.log(`Server hört am port ${port}`));