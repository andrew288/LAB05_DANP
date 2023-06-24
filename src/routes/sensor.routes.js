import { Router } from "express";
import { getSensor, createSensor } from "../controllers/sensor.controller.js";

const router = Router();

router.get("/api/sensor", getSensor);

router.post("/api/sensor", createSensor);

export default router;
