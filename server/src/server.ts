import express, { Express, Request, Response } from "express";
import cors from "cors";
import usersController from './controllers/users.controller';
// import postsController from './controllers/posts.controller';

const app: Express = express();
app.use(cors());
const port = 3001;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is up!");
});

app.listen(port, () => {
  console.log(`🔋 Server is running at http://localhost:${port}`);
});


app.use('/users' , usersController)
// app.use('/posts' , postsController)
