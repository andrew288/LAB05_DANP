import express from "express";
import sensorRouter from "./routes/sensor.routes.js";
import { PORT } from "../config.js";

const app = express();

app.use(sensorRouter);
app.listen(PORT);
