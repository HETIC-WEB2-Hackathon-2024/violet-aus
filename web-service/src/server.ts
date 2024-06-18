import cors from "cors";
import express, {Request, Response} from 'express';

import publicRoutes from './routes/index.public.route'
import privateRoutes from './routes/index.private.route'
import errorHandler from './middlewares/error.middleware';
import authMiddleware from './middlewares/auth.middleware';

const port = 3000;
const app = express();

// make sure we hare handling CORS properly
// See more on CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use('/api/public', publicRoutes);
app.use('/api/private', authMiddleware, privateRoutes);

app.get("*", (req: Request, res: Response) => {
  res.status(400).json({ message: "Bad Request" });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


