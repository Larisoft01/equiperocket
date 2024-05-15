const Router = require("express");
const { postUser } = require("./signUpModel");

const router = Router();

router.post("/", postUser);


module.exports = router;