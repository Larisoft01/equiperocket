import express from "express";
import dotenv from "dotenv";     

import router from "./src/routes/routes.js";

dotenv.config();

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

app.use("/", router );


const port = process.env.PORT || 6000; 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});