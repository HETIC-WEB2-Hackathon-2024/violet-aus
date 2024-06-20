import express, { Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import cors from "cors";
import privateRoutes from "./routes/index.private.route";
import publicRoutes from "./routes/index.public.route";
import errorHandler from "./middlewares/error.middleware";
import authMiddleware from "./middlewares/auth.middleware";

const port = 3000;
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://violet.aus.floless.fr"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(errorHandler);

app.use("/api/public", publicRoutes);

app.use("/api/private", authMiddleware, privateRoutes);

app.get("*", (req: Request, res: Response) => {
  res.status(400).json({ message: "Bad Request" });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
