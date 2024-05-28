import Router from "express";
import { getEatariesByCategory } from "../controllers/eateryController.js";


const router = Router();

// router.use(json());

router.get("/",getEatariesByCategory );


export default router;