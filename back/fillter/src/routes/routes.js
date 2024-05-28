import Router from "express";
import getEatery  from "../controllers/eateryController.js";


const router = Router();

// router.use(json());

router.get("/",getEatery );


export default router;