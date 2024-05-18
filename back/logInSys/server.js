const express = require("express");

const authRoutes = require("./routes/routes.js");


const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

app.use("/", authRoutes );


const port = 8000; 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});