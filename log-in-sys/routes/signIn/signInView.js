const Router = require("express");
const {getUser} = require("./signInModel");

const router = Router();

router.get("/", getUser);

module.exports = router;