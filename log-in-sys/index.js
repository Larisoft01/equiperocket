const express = require("express");

const signUpRoute = require("./routes/signUp/signUpView");

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

app.use("/sign-up", signUpRoute);

const port = 8000; 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});