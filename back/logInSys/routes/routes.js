const Router = require("express");
const { getUser, postUser, authUser } = require("../controllers/authController");
const bodyParser = require("body-parser");
const { authMiddlewere } = require("../middlewares/authMiddleware");

const router = Router();

router.use(bodyParser.json());

router.get("/sign-in", authUser);
router.post("/sign-up", postUser);
router.get("/profile",authMiddlewere,getUser);


module.exports = router;