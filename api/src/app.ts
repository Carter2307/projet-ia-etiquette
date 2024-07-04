import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import etiquetteRouter from "./routes/etiquetteRouter";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/test", (req: Request, res: Response) => res.send("ok"));

app.use("/etiquettes", etiquetteRouter);

export default app;
