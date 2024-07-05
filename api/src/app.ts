import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import etiquetteRouter from "./routes/etiquetteRouter";
import userRouter from "./routes/usersRouter";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/test", (req: Request, res: Response) => res.send("ok"));

app.use("/etiquettes", etiquetteRouter);
app.use("/users", userRouter);

export default app;
