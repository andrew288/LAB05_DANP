import { Router } from "express";
import { getSensor, createSensor } from "../controllers/sensor.controller.js";

const router = Router();

router.get("/sensor", getSensor);

router.post("/sensor", createSensor);

export default router;
