const Router = require("express");
const { getUser, postUser } = require("../controllers/authController");
const bodyParser = require("body-parser");

const router = Router();

router.use(bodyParser.json());
router.get("/sign-in", getUser);
router.post("/sign-up", postUser);


module.exports = router;