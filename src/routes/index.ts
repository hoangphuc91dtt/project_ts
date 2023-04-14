import { Router } from "express";
import HomeController from "../controllers/home_controller";

const router = Router();

router.get("/", HomeController.index);

export default router;
