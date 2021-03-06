import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "../backend/middleware/errorMiddleware";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();

connectDB();

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);

app.use(notFound);
//app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(5001, () =>
  console.log(
    colors.yellow.bold(
      `Server running in ${process.env.NODE_ENV} on port ${PORT}`
    )
  )
);
